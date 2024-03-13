import { AppBar, Avatar, Box, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import Logo from '../../assets/HealthLogo.png'
import { LogoWrapper } from '../Logo/LogoStyled'
import { THeader } from '../../Types/ComponentTypes'

const Header: React.FC<THeader> = ({
  handleClick,
  avatarText,
  anchorEl,
  open,
  handleClose,
  logOut
}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Stack width={'5%'}>
          <LogoWrapper src={Logo} />
        </Stack>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Health Track
        </Typography>
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
                Log out
              </Stack>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
