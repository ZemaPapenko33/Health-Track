import { FirebaseError } from 'firebase/app'
import { t } from 'i18next'
import { Errors, Gender } from '../shared/enums'
import { TErrorMessage } from '../Types/ErrorTypes'
import { UserInfo } from '../Types/UserTypes'

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

export function isStepValid(step: number, userInfo: UserInfo) {
  switch (step) {
    case 0:
      return userInfo.name !== '' && userInfo.surname !== ''
    case 1:
      return userInfo.age !== 0 && userInfo.gender !== Gender.DEFAULT
    case 2:
      return userInfo.height !== 0 && userInfo.weight !== 0
    case 3:
      return userInfo.activity !== ''
    case 4:
      return userInfo.goal !== ''
    default:
      return false
  }
}
