import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context'
import { TErrorMessage } from '../Types/ErrorTypes'
import { FirebaseError } from 'firebase/app'
import { handleError } from '../utils/handleError'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import { PageRoutes } from '../shared/enums'

type AuthPageHook = {
  showPassword: boolean
  passwordInputType: string
  errorMessage: TErrorMessage
  emailInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  passwordInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  showPasswordHandler: VoidFunction
  formHandler: (event: FormEvent) => Promise<void>
  googleHandler: (event: React.MouseEvent) => Promise<void>
}

function useAuthPage(): AuthPageHook {
  const { email, password, emailInputHandler, passwordInputHandler } = useAppContext()
  const [errorMessage, setErrorMessage] = useState<TErrorMessage>({
    passwordField: '',
    emailField: '',
    defaultError: ''
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const navigateTo = useNavigate()
  const passwordInputType = showPassword ? 'text' : 'password'

  const formHandler = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    try {
      const currentUser = await signInWithEmailAndPassword(auth, email, password)
      localStorage.setItem('userAuth', currentUser.operationType)
      localStorage.setItem('email', email)
      navigateTo(`${PageRoutes.HOME_ROUTE}?activeMenu=profile`)
    } catch (error) {
      const firebaseError = error as FirebaseError
      handleError(firebaseError, setErrorMessage, errorMessage)
      return
    }
  }

  const googleHandler = async (event: React.MouseEvent) => {
    event.preventDefault()
    const provider = new GoogleAuthProvider()
    auth.useDeviceLanguage()

    try {
      const currentUser = await signInWithPopup(auth, provider)
      localStorage.setItem('email', currentUser.user.email!)
      localStorage.setItem('registration', currentUser.operationType)
      navigateTo(PageRoutes.PROFILE_ROUTE)
    } catch (error) {
      const firebaseError = error as FirebaseError
      handleError(firebaseError, setErrorMessage, errorMessage)
      return
    }
  }

  const showPasswordHandler = () => {
    setShowPassword(!showPassword)
  }

  return {
    passwordInputType,
    errorMessage,
    showPassword,
    showPasswordHandler,
    passwordInputHandler,
    emailInputHandler,
    formHandler,
    googleHandler
  }
}

export default useAuthPage
