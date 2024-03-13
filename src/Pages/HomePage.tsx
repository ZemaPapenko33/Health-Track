import { Stack } from '@mui/material'
import { useDefaultRedirect } from '../hooks/use-default-redirect.hook'
import useHomePage from '../hooks/use-home-page.hook'
import Sidebar from '../Components/Sidebar/Sidebar'
import Header from '../Components/Header/Header'

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
    sidebarItemClick
  } = useHomePage()
  useDefaultRedirect()
  getUser()

  return (
    <Stack width={'100vw'} height={'100vh'} overflow={'hidden'}>
      <Header
        avatarText={avatarText}
        open={open}
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
      <Stack flexDirection={'row'}>
        <Sidebar
          sidebarItems={sidebarItems}
          selectedMenu={selectedMenu}
          sidebarItemClick={sidebarItemClick}
        />
      </Stack>
    </Stack>
  )
}

export default HomePage
