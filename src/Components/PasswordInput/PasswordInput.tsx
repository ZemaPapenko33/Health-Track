import React from 'react'
import { PasswordInputWrapper } from './PasswordInputStyled'
import { t } from 'i18next'
import VisibilityPassword from '../VisibilityPassword/VisibilityPassword'

type TPasswordInput = {
  passwordError: boolean
  showPassword: boolean
  passwordInputHelperText: string
  passwordInputType: string
  passwordInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  showPasswordHandler: VoidFunction
}

const PasswordInput: React.FC<TPasswordInput> = ({
  passwordInputHandler,
  passwordInputHelperText,
  passwordInputType,
  passwordError,
  showPassword,
  showPasswordHandler
}) => {
  return (
    <PasswordInputWrapper
      helperText={passwordInputHelperText}
      label={t('t-password')}
      type={passwordInputType}
      variant="standard"
      margin="normal"
      size="medium"
      error={passwordError}
      InputProps={{
        endAdornment: (
          <VisibilityPassword
            showPassword={showPassword}
            showPasswordHandler={showPasswordHandler}
          />
        )
      }}
      required
      onChange={passwordInputHandler}
    />
  )
}

export default PasswordInput
