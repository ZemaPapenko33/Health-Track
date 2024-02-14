import React from 'react'
import { PendingFormWrapper } from './PendingFormStyled'
import { Typography } from '@mui/material'
import { BackButtonWrapper } from '../BackButton/BackButtonStyled'

type Props = {
  email: string
  backButtonHandler: VoidFunction
}

const PendingForm: React.FC<Props> = ({ email, backButtonHandler }) => {
  return (
    <PendingFormWrapper>
      <Typography variant="h3" color="white">
        Confirm your e-mail
      </Typography>
      <Typography variant="h6">
        An email {email} with a confirmation link has been sent to your email. If you have entered
        the wrong e-mail address, please go back to it
      </Typography>
      <BackButtonWrapper variant="contained" onClick={backButtonHandler}>
        Go back
      </BackButtonWrapper>
    </PendingFormWrapper>
  )
}

export default PendingForm
