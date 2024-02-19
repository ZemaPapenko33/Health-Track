import React from 'react'
import { EmailInputWrapper } from './EmailInputStyled'
import { t } from 'i18next'
import { TEmailInput } from '../../Types/ComponentTypes'

const EmailInput: React.FC<TEmailInput> = ({
  emailInputHelperText,
  emailInputHandler,
  emailError
}) => {
  return (
    <EmailInputWrapper
      helperText={emailInputHelperText}
      label={t('t-email')}
      type="email"
      variant="standard"
      margin="dense"
      size="medium"
      error={emailError}
      required
      onChange={emailInputHandler}
    />
  )
}

export default EmailInput
