import React from 'react'
import { PendingFormWrapper } from './PendingFormStyled'
import { Typography } from '@mui/material'
import { BackButtonWrapper } from '../BackButton/BackButtonStyled'
import { t } from 'i18next'

type Props = {
  backButtonHandler: VoidFunction
}

const PendingForm: React.FC<Props> = ({ backButtonHandler }) => {
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
