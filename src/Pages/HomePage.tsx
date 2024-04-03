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
    sidebarItems,
    selectedMenu,
    userBMI,
    percentUserBMI,
    isLoading,
    sidebarItemClick,
    logOut
  } = useHomePage()
  useDefaultRedirect()

  useEffect(() => {
    getUser()
    const queryParams = new URLSearchParams(window.location.search)
    if (!queryParams.has('activeMenu')) {
      queryParams.set('activeMenu', 'profile')
      window.history.replaceState({}, '', `${window.location.pathname}?${queryParams.toString()}`)
    }
  }, [])

  return (
    <Stack width={'100vw'} height={'100vh'} overflow={'hidden'}>
      <Header logOut={logOut} isLoading={isLoading} />
      <Stack flexDirection={'row'} width={'100%'} height={'91%'}>
        <Sidebar
          sidebarItems={sidebarItems}
          selectedMenu={selectedMenu}
          sidebarItemClick={sidebarItemClick}
          isLoading={isLoading}
        />
        <ContentHomePage
          isLoading={isLoading}
          selectedMenu={selectedMenu}
          userBMI={userBMI}
          percentUserBMI={percentUserBMI}
        />
      </Stack>
    </Stack>
  )
}

export default HomePage
