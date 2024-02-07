import imgBack from '../assets/HealthBack.png'
import GoogleIcon from '@mui/icons-material/Google'
import { Box, Button, Stack, Typography } from '@mui/material'
import { BgImage } from '../Components/BgImage/BgImageStyled'
import SeparationBox from '../Components/SeparationBox/SeparationBox'
import FormForRegAndAuth from '../Components/FormForRegAndAuth/FormForRegAndAuth'

const LoginPage = (): JSX.Element => {
  return (
    <Stack width={`100vw`} flexDirection={`row`} height={`100vh`}>
      <Box width={`50%`}>
        <BgImage src={imgBack} alt="background" />
      </Box>
      <Stack width={`50%`} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h2">Health Track</Typography>
        <Typography variant="subtitle1">Welcome back</Typography>
        <FormForRegAndAuth />
        <SeparationBox />
        <Button variant="outlined">
          <Stack gap={1} flexDirection={'row'}>
            <GoogleIcon />
            <Typography>Sign in with Google</Typography>
          </Stack>
        </Button>
      </Stack>
    </Stack>
  )
}

export default LoginPage
