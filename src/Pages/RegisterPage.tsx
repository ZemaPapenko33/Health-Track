import { Box, Stack, Typography } from '@mui/material'
import imgBack from '../assets/HealthBack.png'
import { BgImage } from '../Components/BgImage/BgImageStyled'
import FormForRegAndAuth from '../Components/FormForRegAndAuth/FormForRegAndAuth'
import { useTranslation } from 'react-i18next'

const RegisterPage = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Stack width={`100vw`} flexDirection={`row`} height={`100vh`}>
      <Box width={`50%`}>
        <BgImage src={imgBack} alt={t('t-background')} />
      </Box>
      <Stack width={`50%`} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h2">{t('t-health-track')}</Typography>
        <Typography variant="subtitle1">{t('t-welcome')}</Typography>
        <FormForRegAndAuth keyText={t('t-register')} />
      </Stack>
    </Stack>
  )
}

export default RegisterPage
