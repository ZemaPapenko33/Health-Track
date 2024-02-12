import React from 'react'
import { PasswordInputWrapper } from './PasswordInputStyled'
import { t } from 'i18next'
import { IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

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
          <InputAdornment position="end">
            <IconButton onClick={showPasswordHandler}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
      required
      onChange={passwordInputHandler}
    />
  )
}

export default PasswordInput
