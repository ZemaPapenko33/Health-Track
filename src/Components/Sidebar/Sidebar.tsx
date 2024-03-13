import React from 'react'
import { Stack, useTheme } from '@mui/material'
import { TSidebar } from '../../Types/ComponentTypes'
import Icons from '../IconSwitch/Icons'

const Sidebar: React.FC<TSidebar> = ({ sidebarItems, selectedMenu, sidebarItemClick }) => {
  const theme = useTheme()

  return (
    <Stack
      width={'7%'}
      height={'100%'}
      paddingTop={'0.5rem'}
      justifyContent={'flex-end'}
      overflow={'auto'}
    >
      {sidebarItems.map((itemText, index) => {
        const isSelected = selectedMenu === itemText
        return (
          <Stack
            width={'100%'}
            height={'50px'}
            marginBottom={'0.5rem'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={'0 30px 30px 0'}
            bgcolor={isSelected ? theme.palette.salad.main : ''}
            onClick={() => sidebarItemClick(index)}
            style={{ cursor: 'pointer' }}
            sx={{
              '&:hover': {
                backgroundColor: theme.palette.lightBlue.main
              }
            }}
          >
            <Icons text={itemText} />
            {itemText}
          </Stack>
        )
      })}
    </Stack>
  )
}

export default Sidebar
