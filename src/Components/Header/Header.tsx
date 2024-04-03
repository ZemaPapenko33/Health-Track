import { AppBar, Box, Skeleton, Stack, Toolbar, Typography } from '@mui/material'
import Logo from '../../assets/HealthLogo.png'
import { LogoWrapper } from '../Logo/LogoStyled'
import { THeader } from '../../Types/ComponentTypes'
import AvatarBox from '../AvatarBox/AvatarBox'

const Header: React.FC<THeader> = ({ isLoading, logOut }) => {
  return (
    <Stack width={'100%'} height={'9%'}>
      <AppBar position="static">
        <Toolbar>
          <Stack width={'5%'}>
            <LogoWrapper src={Logo} />
          </Stack>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Health Track
          </Typography>
          {isLoading ? (
            <Box>
              <Skeleton animation="wave" variant="circular" width={41} height={41} />
            </Box>
          ) : (
            <AvatarBox logOut={logOut} />
          )}
        </Toolbar>
      </AppBar>
    </Stack>
  )
}

export default Header
