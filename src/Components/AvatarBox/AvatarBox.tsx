import { Avatar, Box, Menu, MenuItem, Stack } from '@mui/material'
import { t } from 'i18next'
import LogoutIcon from '@mui/icons-material/Logout'
import React from 'react'
import { TAvatarBox } from '../../Types/ComponentTypes'

const AvatarBox: React.FC<TAvatarBox> = ({
  avatarText,
  handleClick,
  handleClose,
  logOut,
  open,
  anchorEl
}) => {
  return (
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
  )
}

export default AvatarBox
