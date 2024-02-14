import { Stack } from '@mui/material'
import background from '../assets/backgroundPending.png'
import { ImageForPending } from '../Components/ImageForPending/ImageForPendingStyled'
import { t } from 'i18next'
import PendingForm from '../Components/PendingForm/PendingForm'
import usePendingPage from '../hooks/use-pending-page.hook'
import { useDefaultRedirect } from '../hooks/use-default-redirect.hook'
import { auth } from '../firebase/firebaseConfig'
import { useEffect } from 'react'
import { PageRoutes } from '../shared/enums'
import { useNavigate } from 'react-router-dom'

const PendingConfirmationPage = () => {
  const { email, backButtonHandler } = usePendingPage()
  const navigate = useNavigate()
  useDefaultRedirect()

  useEffect(() => {
    const checkEmailVerified = setInterval(() => {
      auth.currentUser?.reload().then(() => {
        if (auth.currentUser?.emailVerified) {
          navigate(PageRoutes.HOME_ROUTE)
        }
      })
    }, 2000)

    return () => clearInterval(checkEmailVerified)
  }, [navigate])

  return (
    <Stack
      width={'100vw'}
      height={'100vh'}
      position={'relative'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <ImageForPending src={background} alt={t('t-background')} />
      <PendingForm email={email!} backButtonHandler={backButtonHandler} />
    </Stack>
  )
}

export default PendingConfirmationPage
