import React, { FormEvent } from 'react'
import { FormForRegAndAuthWrapper } from './FormForRegAndAuthStyled'
import { Button } from '@mui/material'
import EmailInput from '../EmailInput/EmailInput'
import PasswordInput from '../PasswordInput/PasswordInput'

interface IFormForRegAndAuth {
  keyText: string
  emailError: boolean
  passwordError: boolean
  showPassword: boolean
  emailInputHelperText: string
  passwordInputHelperText: string
  passwordInputType: string
  formHandler: (event: FormEvent) => Promise<void>
  emailInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  passwordInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  showPasswordHandler: VoidFunction
}

const FormForRegAndAuth: React.FC<IFormForRegAndAuth> = ({
  keyText,
  emailError,
  passwordError,
  showPassword,
  emailInputHelperText,
  passwordInputHelperText,
  passwordInputType,
  formHandler,
  emailInputHandler,
  passwordInputHandler,
  showPasswordHandler
}) => {
  return (
    <FormForRegAndAuthWrapper onSubmit={formHandler}>
      <EmailInput
        emailError={emailError}
        emailInputHelperText={emailInputHelperText}
        emailInputHandler={emailInputHandler}
      />
      <PasswordInput
        passwordError={passwordError}
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
