import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context'
import { FormEvent, useState } from 'react'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import { Errors, PageRoutes } from '../shared/enums'
import { FirebaseError } from 'firebase/app'
import { useTranslation } from 'react-i18next'

type RegisterPageHook = {
  errorMessage: string
  emailError: boolean
  passwordError: boolean
  emailInputHelperText: string
  passwordInputHelperText: string
  showPassword: boolean
  passwordInputType: string
  formHandler: (event: FormEvent) => Promise<void>
  emailInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  passwordInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  showPasswordHandler: VoidFunction
}

function useRegisterPage(): RegisterPageHook {
  const { email, password, emailInputHandler, passwordInputHandler } = useAppContext()
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [emailError, setEmailError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const navigateTo = useNavigate()
  const { t } = useTranslation()

  const emailInputHelperText = emailError ? errorMessage : t('t-please-enter-your-email')

  const passwordInputHelperText = passwordError
    ? errorMessage
    : t('t-please-enter-a-password-of-at-least-8-characters')

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
      switch (firebaseError.code) {
        case Errors.EMAIL_ALREADY_IN_USE:
          setErrorMessage(t('t-error-email-already-in-use'))
          setPasswordError(false)
          setEmailError(true)
          break
        case Errors.WEAK_PASSWORD:
          setErrorMessage(t('t-error-weak-password'))
          setEmailError(false)
          setPasswordError(true)
          break
        case Errors.INVALID_EMAIL:
          setErrorMessage(t('t-error-invalid-email'))
          setPasswordError(false)
          setEmailError(true)
          break
        case Errors.MISSING_PASSWORD:
          setErrorMessage(t('t-error-missing-password'))
          setEmailError(false)
          setPasswordError(true)
          break
        default:
          setErrorMessage(t('t-error-unknown') + firebaseError.code)
          break
      }
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
    emailError,
    passwordError,
    showPassword,
    emailInputHelperText,
    passwordInputHelperText,
    passwordInputType
  }
}

export default useRegisterPage
