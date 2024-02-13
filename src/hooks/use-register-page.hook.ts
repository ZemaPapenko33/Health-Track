import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context'
import { FormEvent, useState } from 'react'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import { PageRoutes } from '../shared/enums'
import { FirebaseError } from 'firebase/app'
import { handleError } from '../utils/handleError'

type RegisterPageHook = {
  errorMessage: TErrorMessage
  showPassword: boolean
  passwordInputType: string
  formHandler: (event: FormEvent) => Promise<void>
  emailInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  passwordInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  showPasswordHandler: VoidFunction
}

type TErrorMessage = {
  passwordField: string
  emailField: string
  defaultError: string
}

function useRegisterPage(): RegisterPageHook {
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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      if (userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: email
        })
        await sendEmailVerification(userCredential.user)
      }
      localStorage.setItem('user', userCredential.user.displayName!)
      localStorage.setItem('email', email)
      navigateTo(PageRoutes.PENDING_ROUTE)
    } catch (error) {
      const firebaseError = error as FirebaseError
      handleError(firebaseError, setErrorMessage, errorMessage)
    }
  }

  const showPasswordHandler = () => {
    setShowPassword(!showPassword)
  }

  return {
    formHandler,
    emailInputHandler,
    passwordInputHandler,
    showPasswordHandler,
    errorMessage,
    showPassword,
    passwordInputType
  }
}

export default useRegisterPage
