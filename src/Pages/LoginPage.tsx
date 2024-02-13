import imgBack from '../assets/HealthBack.png'
import GoogleIcon from '@mui/icons-material/Google'
import { Box, Button, Stack, Typography } from '@mui/material'
import { BgImage } from '../Components/BgImage/BgImageStyled'
import SeparationBox from '../Components/SeparationBox/SeparationBox'
import { useTranslation } from 'react-i18next'
import { useDefaultRedirect } from '../hooks/use-default-redirect.hook'

const LoginPage = (): JSX.Element => {
  const { t } = useTranslation()
  useDefaultRedirect()

  return (
    <Stack width={`100vw`} flexDirection={`row`} height={`100vh`}>
      <Box width={`50%`}>
        <BgImage src={imgBack} alt={t('t-background')} />
      </Box>
      <Stack width={`50%`} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h2">{t('t-health-track')}</Typography>
        <Typography variant="subtitle1">{t('t-welcome-back')}</Typography>
        <SeparationBox />
        <Button variant="outlined">
          <Stack gap={1} flexDirection={'row'}>
            <GoogleIcon />
            <Typography>{t('t-sign-in-with-Google')}</Typography>
          </Stack>
        </Button>
      </Stack>
    </Stack>
  )
}

export default LoginPage
