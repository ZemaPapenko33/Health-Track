import React from 'react'
import { FormForRegAndAuthWrapper } from './FormForRegAndAuthStyled'
import { Button } from '@mui/material'
import { EmailInputWrapper } from '../EmailInput/EmailInputStyled'
import { useTranslation } from 'react-i18next'
import { PasswordInputWrapper } from '../PasswordInput/PasswordInputStyled'

interface IFormForRegAndAuth {
  keyText: string
}

const FormForRegAndAuth: React.FC<IFormForRegAndAuth> = ({ keyText }) => {
  const { t } = useTranslation()

  return (
    <FormForRegAndAuthWrapper>
      <EmailInputWrapper
        helperText={t('t-please-enter-your-email')}
        label={t('t-email')}
        type="Email"
        variant="standard"
        margin="dense"
        size="medium"
        required
      />
      <PasswordInputWrapper
        helperText={t('t-please-enter-a-password-of-at-least-8-characters')}
        label={t('t-password')}
        type="Password"
        variant="standard"
        margin="normal"
        size="medium"
        required
      />
      <Button variant="contained">{keyText}</Button>
    </FormForRegAndAuthWrapper>
  )
}

export default FormForRegAndAuth
