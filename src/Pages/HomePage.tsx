import { Stack } from '@mui/material'
import { useDefaultRedirect } from '../hooks/use-default-redirect.hook'
import useHomePage from '../hooks/use-home-page.hook'
import Sidebar from '../Components/Sidebar/Sidebar'
import Header from '../Components/Header/Header'
import ContentHomePage from '../Components/ContentHomePage/ContentHomePage'
import { useEffect } from 'react'

const HomePage = (): JSX.Element => {
  const {
    getUser,
    avatarText,
    open,
    handleClose,
    handleClick,
    anchorEl,
    sidebarItems,
    selectedMenu,
    userBMI,
    percentUserBMI,
    sidebarItemClick,
    logOut
  } = useHomePage()
  useDefaultRedirect()

  useEffect(() => {
    getUser()
    window.history.replaceState({}, '', '/?menu=profile')
  }, [])

  return (
    <Stack width={'100vw'} height={'100vh'} overflow={'hidden'}>
      <Header
        avatarText={avatarText}
        open={open}
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
        logOut={logOut}
      />
      <Stack flexDirection={'row'}>
        <Sidebar
          sidebarItems={sidebarItems}
          selectedMenu={selectedMenu}
          sidebarItemClick={sidebarItemClick}
        />
        <ContentHomePage
          selectedMenu={selectedMenu}
          userBMI={userBMI}
          percentUserBMI={percentUserBMI}
        />
      </Stack>
    </Stack>
  )
}

export default HomePage
