import React from 'react'
import { FormForRegAndAuthWrapper } from './FormForRegAndAuthStyled'
import { Button } from '@mui/material'
import EmailInput from '../EmailInput/EmailInput'
import PasswordInput from '../PasswordInput/PasswordInput'
import { IFormForRegAndAuth } from '../../Types/ComponentTypes'

const FormForRegAndAuth: React.FC<IFormForRegAndAuth> = ({
  keyText,
  showPassword,
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
        emailInputHelperText={errorMessage.emailField}
        emailInputHandler={emailInputHandler}
      />
      <PasswordInput
        passwordError={!!errorMessage.passwordField}
        showPassword={showPassword}
        showPasswordHandler={showPasswordHandler}
        passwordInputHandler={passwordInputHandler}
        passwordInputType={passwordInputType}
        passwordInputHelperText={errorMessage.passwordField}
      />

      <Button variant="contained" type="submit">
        {keyText}
      </Button>
    </FormForRegAndAuthWrapper>
  )
}

export default FormForRegAndAuth
