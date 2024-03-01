import { useDefaultRedirect } from '../hooks/use-default-redirect.hook'
import { Button } from '@mui/material'
import { auth } from '../firebase/firebaseConfig'
import { signOut } from 'firebase/auth'

const HomePage = (): JSX.Element => {
  useDefaultRedirect()

  return (
    <div>
      Home page
      <Button
        onClick={() => {
          signOut(auth).then(() => {
            localStorage.clear()
          })
        }}
      >
        LOGOUT
      </Button>
    </div>
  )
}

export default HomePage
