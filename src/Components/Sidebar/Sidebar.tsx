import React from 'react'
import { Stack, useTheme } from '@mui/material'
import { TSidebar } from '../../Types/ComponentTypes'
import Icons from '../IconSwitch/Icons'

const Sidebar: React.FC<TSidebar> = ({ sidebarItems, selectedMenu, sidebarItemClick }) => {
  const theme = useTheme()

  return (
    <Stack width={'7%'} paddingTop={'0.5rem'} overflow={'auto'}>
      {sidebarItems.map((item, index) => {
        const isSelected = selectedMenu === item.text
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
      })}
    </Stack>
  )
}

export default Sidebar
