import { Stack } from '@mui/material'
import background from '../assets/backgroundPending.png'
import { ImageForPending } from '../Components/ImageForPending/ImageForPendingStyled'
import { t } from 'i18next'

import PendingForm from '../Components/PendingForm/PendingForm'

const PendingConfirmationPage = () => {
  const email = localStorage.getItem('email')

  return (
    <Stack
      width={'100vw'}
      height={'100vh'}
      position={'relative'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <ImageForPending src={background} alt={t('t-background')} />
      <PendingForm email={email!} />
    </Stack>
  )
}

export default PendingConfirmationPage
