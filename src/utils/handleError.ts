import { FirebaseError } from 'firebase/app'
import { t } from 'i18next'
import { Errors } from '../shared/enums'
import { TErrorMessage } from '../Types/ErrorTypes'

export const handleError = (
  error: FirebaseError,
  setErrorMessage: React.Dispatch<React.SetStateAction<TErrorMessage>>,
  errorMessage: TErrorMessage
) => {
  const newErrorMessage = { ...errorMessage }
  switch (error.code) {
    case Errors.EMAIL_ALREADY_IN_USE:
      newErrorMessage.emailField = t('t-error-email-already-in-use')
      break
    case Errors.WEAK_PASSWORD:
      newErrorMessage.passwordField = t('t-error-weak-password')
      break
    case Errors.INVALID_EMAIL:
      newErrorMessage.emailField = t('t-error-invalid-email')
      break
    case Errors.MISSING_PASSWORD:
      newErrorMessage.passwordField = t('t-error-missing-password')
      break
    default:
      newErrorMessage.defaultError = t('t-error-unknown') + error.code
      break
  }
  setErrorMessage(newErrorMessage)
}
