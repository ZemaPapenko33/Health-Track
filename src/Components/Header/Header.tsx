import {
  AppBar,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Skeleton,
  Stack,
  Toolbar,
  Typography
} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import Logo from '../../assets/HealthLogo.png'
import { LogoWrapper } from '../Logo/LogoStyled'
import { THeader } from '../../Types/ComponentTypes'
import { t } from 'i18next'

const Header: React.FC<THeader> = ({
  handleClick,
  avatarText,
  anchorEl,
  open,
  isLoading,
  handleClose,
  logOut
}) => {
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
            <Box>
              <Avatar onClick={handleClick}>{avatarText}</Avatar>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
              >
                <MenuItem onClick={logOut}>
                  <Stack gap={0.25} flexDirection={'row'}>
                    <LogoutIcon />
                    {t('t-logOut')}
                  </Stack>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Stack>
  )
}

export default Header
