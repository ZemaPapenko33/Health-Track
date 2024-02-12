import React from 'react'
import { EmailInputWrapper } from './EmailInputStyled'
import { t } from 'i18next'

type TEmailInput = {
  emailError: boolean
  emailInputHelperText: string
  emailInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

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
