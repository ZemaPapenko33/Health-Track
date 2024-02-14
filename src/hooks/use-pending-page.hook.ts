import { useNavigate } from 'react-router-dom'
import { PageRoutes } from '../shared/enums'
import { auth } from '../firebase/firebaseConfig'

type PendingPageHook = {
  email: string
  backButtonHandler: VoidFunction
}

function usePendingPage(): PendingPageHook {
  const email = localStorage.getItem('email')!
  const navigate = useNavigate()

  const backButtonHandler = () => {
    localStorage.clear()
    auth.currentUser?.delete()
    navigate(PageRoutes.REGISTER_ROUTE)
  }

  return { email, backButtonHandler }
}

export default usePendingPage
