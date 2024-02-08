import { Box, Stack, Typography } from '@mui/material'
import imgBack from '../assets/HealthBack.png'
import { BgImage } from '../Components/BgImage/BgImageStyled'
import FormForRegAndAuth from '../Components/FormForRegAndAuth/FormForRegAndAuth'

const RegisterPage = (): JSX.Element => {
  return (
    <Stack width={`100vw`} flexDirection={`row`} height={`100vh`}>
      <Box width={`50%`}>
        <BgImage src={imgBack} alt="background" />
      </Box>
      <Stack width={`50%`} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h2">Health Track</Typography>
        <Typography variant="subtitle1">Hello to new users</Typography>
        <FormForRegAndAuth keyText="Register" />
      </Stack>
    </Stack>
  )
}

export default RegisterPage
