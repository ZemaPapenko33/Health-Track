import { Stack } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { t } from 'i18next'
import { ImageForPending } from '../Components/ImageForPending/ImageForPendingStyled'
import PendingForm from '../Components/PendingForm/PendingForm'
import usePendingPage from '../hooks/use-pending-page.hook'
import { useDefaultRedirect } from '../hooks/use-default-redirect.hook'
import background from '../assets/backgroundPending.png'
import { auth } from '../firebase/firebaseConfig'
import { PageRoutes } from '../shared/enums'

const PendingConfirmationPage = (): JSX.Element => {
  const { backButtonHandler } = usePendingPage()
  const navigate = useNavigate()
  useDefaultRedirect()

  useEffect(() => {
    const checkEmailVerified = setInterval(() => {
      auth.currentUser?.reload().then(() => {
        if (auth.currentUser?.emailVerified) {
          navigate(PageRoutes.PROFILE_ROUTE)
        }
      })
    }, 5000)

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
      <PendingForm backButtonHandler={backButtonHandler} />
    </Stack>
  )
}

export default PendingConfirmationPage
