import { Box, Stack, Typography } from '@mui/material'
import imgBack from '../assets/HealthBack.png'
import { BgImage } from '../Components/BgImage/BgImageStyled'
import FormForRegAndAuth from '../Components/FormForRegAndAuth/FormForRegAndAuth'
import { useTranslation } from 'react-i18next'
import useRegisterPage from '../hooks/use-register-page.hook'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageRoutes } from '../shared/enums'

const RegisterPage = (): JSX.Element => {
  const { t } = useTranslation()
  const {
    formHandler,
    emailInputHandler,
    passwordInputHandler,
    showPasswordHandler,
    emailError,
    passwordError,
    emailInputHelperText,
    passwordInputHelperText,
    showPassword,
    passwordInputType
  } = useRegisterPage()
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('user')

    if (user) {
      navigate(PageRoutes.HOME_ROUTE)
    }
  }, [navigate])

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
          emailError={emailError}
          passwordError={passwordError}
          showPassword={showPassword}
          showPasswordHandler={showPasswordHandler}
          emailInputHelperText={emailInputHelperText}
          passwordInputHelperText={passwordInputHelperText}
          passwordInputType={passwordInputType}
        />
      </Stack>
    </Stack>
  )
}

export default RegisterPage
