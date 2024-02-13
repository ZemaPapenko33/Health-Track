import React, { FormEvent } from 'react'
import { FormForRegAndAuthWrapper } from './FormForRegAndAuthStyled'
import { Button } from '@mui/material'
import EmailInput from '../EmailInput/EmailInput'
import PasswordInput from '../PasswordInput/PasswordInput'

interface IFormForRegAndAuth {
  keyText: string
  showPassword: boolean
  emailInputHelperText: string
  passwordInputHelperText: string
  passwordInputType: string
  errorMessage: TErrorMessage
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

const FormForRegAndAuth: React.FC<IFormForRegAndAuth> = ({
  keyText,
  showPassword,
  emailInputHelperText,
  passwordInputHelperText,
  passwordInputType,
  errorMessage,
  formHandler,
  emailInputHandler,
  passwordInputHandler,
  showPasswordHandler
}) => {
  return (
    <FormForRegAndAuthWrapper onSubmit={formHandler}>
      <EmailInput
        emailError={!!errorMessage.emailField}
        emailInputHelperText={emailInputHelperText}
        emailInputHandler={emailInputHandler}
      />
      <PasswordInput
        passwordError={!!errorMessage.passwordField}
        showPassword={showPassword}
        showPasswordHandler={showPasswordHandler}
        passwordInputHandler={passwordInputHandler}
        passwordInputType={passwordInputType}
        passwordInputHelperText={passwordInputHelperText}
      />
      <Button variant="contained" type="submit">
        {keyText}
      </Button>
    </FormForRegAndAuthWrapper>
  )
}

export default FormForRegAndAuth
