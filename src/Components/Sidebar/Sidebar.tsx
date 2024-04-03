import React from 'react'
import { Skeleton, Stack } from '@mui/material'
import { TSidebar } from '../../Types/ComponentTypes'

import SidebarItem from '../SidebarItem/SidebarItem'

const Sidebar: React.FC<TSidebar> = ({
  sidebarItems,
  selectedMenu,
  sidebarItemClick,
  isLoading
}) => {
  return (
    <Stack width={'7%'} paddingTop={'0.5rem'} overflow={'auto'}>
      {isLoading ? (
        <Skeleton variant="rectangular" animation="wave" width={'100%'} height={'85vh'} />
      ) : (
        <>
          {sidebarItems.map((item, index) => {
            const isSelected = selectedMenu === item.text
            return (
              <SidebarItem
                isSelected={isSelected}
                index={index}
                item={item}
                sidebarItemClick={sidebarItemClick}
              />
            )
          })}
        </>
      )}
    </Stack>
  )
}

export default Sidebar
