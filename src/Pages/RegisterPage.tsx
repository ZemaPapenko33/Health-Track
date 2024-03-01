import { Box, Stack, Typography, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { BgImage } from '../Components/BgImage/BgImageStyled'
import FormForRegAndAuth from '../Components/FormForRegAndAuth/FormForRegAndAuth'
import useRegisterPage from '../hooks/use-register-page.hook'
import { useDefaultRedirect } from '../hooks/use-default-redirect.hook'
import imgBack from '../assets/HealthBack.png'
import { Link } from 'react-router-dom'
import { PageRoutes } from '../shared/enums'

const RegisterPage = (): JSX.Element => {
  const { t } = useTranslation()
  const theme = useTheme()
  const {
    formHandler,
    emailInputHandler,
    passwordInputHandler,
    showPasswordHandler,
    errorMessage,
    showPassword,
    passwordInputType
  } = useRegisterPage()
  useDefaultRedirect()

  return (
    <Stack width={`100vw`} flexDirection={`row`} height={`100vh`}>
      <Box width={`50%`}>
        <BgImage src={imgBack} alt={t('t-background')} />
      </Box>
      <Stack width={`50%`} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h2">{t('t-health-track')}</Typography>
        <Typography variant="subtitle1">{t('t-welcome')}</Typography>
        <FormForRegAndAuth
          keyText={t('t-register')}
          formHandler={formHandler}
          emailInputHandler={emailInputHandler}
          passwordInputHandler={passwordInputHandler}
          showPassword={showPassword}
          showPasswordHandler={showPasswordHandler}
          passwordInputType={passwordInputType}
          errorMessage={errorMessage}
        />
        <Stack paddingTop={'1rem'}>
          <Typography variant="caption" style={{ color: theme.palette.blackGrey.main }}>
            {t('t-have-account')} <Link to={PageRoutes.LOGIN_ROUTE}>{t('t-sign-in')}</Link>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default RegisterPage
