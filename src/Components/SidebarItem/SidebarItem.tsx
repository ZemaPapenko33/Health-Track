import { Stack } from '@mui/material'
import React from 'react'
import { TSidebarItem } from '../../Types/ComponentTypes'
import { theme } from '../../theme'
import Icons from '../IconSwitch/Icons'

const SidebarItem: React.FC<TSidebarItem> = ({ isSelected, sidebarItemClick, index, item }) => {
  return (
    <Stack
      key={item.id}
      height={'50px'}
      width={'100%'}
      marginBottom={'0.5rem'}
      justifyContent={'center'}
      alignItems={'center'}
      borderRadius={'0 30px 30px 0'}
      bgcolor={isSelected ? theme.palette.salad.main : ''}
      onClick={() => sidebarItemClick(index)}
      style={{ cursor: 'pointer' }}
      sx={{
        '&:hover': {
          backgroundColor: isSelected ? '' : theme.palette.lightBlue.main
        }
      }}
    >
      <Icons text={item.text} />
      {item.text}
    </Stack>
  )
}

export default SidebarItem
