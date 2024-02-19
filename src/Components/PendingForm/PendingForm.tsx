import React from 'react'
import { PendingFormWrapper } from './PendingFormStyled'
import { Typography } from '@mui/material'
import { BackButtonWrapper } from '../BackButton/BackButtonStyled'
import { t } from 'i18next'
import { TPendingForm } from '../../Types/ComponentTypes'

const PendingForm: React.FC<TPendingForm> = ({ backButtonHandler }) => {
  return (
    <PendingFormWrapper>
      <Typography variant="h3" color="white">
        Confirm your e-mail
      </Typography>
      <Typography variant="h6">{t('t-e-notification')}</Typography>
      <BackButtonWrapper variant="contained" onClick={backButtonHandler}>
        {t('t-back')}
      </BackButtonWrapper>
    </PendingFormWrapper>
  )
}

export default PendingForm
