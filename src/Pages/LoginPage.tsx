import imgBack from '../assets/HealthBack.png'
import GoogleIcon from '@mui/icons-material/Google'
import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import { BgImage } from '../Components/BgImage/BgImageStyled'
import SeparationBox from '../Components/SeparationBox/SeparationBox'
import { useTranslation } from 'react-i18next'
import { useDefaultRedirect } from '../hooks/use-default-redirect.hook'
import { Link } from 'react-router-dom'
import { PageRoutes } from '../shared/enums'
import FormForRegAndAuth from '../Components/FormForRegAndAuth/FormForRegAndAuth'
import useAuthPage from '../hooks/use-auth-page.hook'

const LoginPage = (): JSX.Element => {
  const { t } = useTranslation()
  const {
    passwordInputType,
    errorMessage,
    showPassword,
    passwordInputHandler,
    emailInputHandler,
    showPasswordHandler,
    formHandler,
    googleHandler
  } = useAuthPage()
  const theme = useTheme()
  useDefaultRedirect()

  return (
    <Stack width={`100vw`} flexDirection={`row`} height={`100vh`}>
      <Box width={`50%`}>
        <BgImage src={imgBack} alt={t('t-background')} />
      </Box>
      <Stack width={`50%`} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h2">{t('t-health-track')}</Typography>
        <Typography variant="subtitle1">{t('t-welcome-back')}</Typography>
        <FormForRegAndAuth
          keyText={t('t-sign-in')}
          formHandler={formHandler}
          emailInputHandler={emailInputHandler}
          passwordInputHandler={passwordInputHandler}
          showPassword={showPassword}
          showPasswordHandler={showPasswordHandler}
          passwordInputType={passwordInputType}
          errorMessage={errorMessage}
        />
        <SeparationBox />
        <Button variant="outlined" onClick={googleHandler}>
          <Stack gap={1} flexDirection={'row'}>
            <GoogleIcon />
            <Typography>{t('t-sign-in-with-Google')}</Typography>
          </Stack>
        </Button>
        <Stack paddingTop={'1rem'}>
          <Typography variant="caption">
            {t('t-no-account')}
            <Link to={PageRoutes.REGISTER_ROUTE} style={{ color: theme.palette.blackGrey.main }}>
              {'\t' + t('t-register')}
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default LoginPage
