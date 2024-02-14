import { useNavigate } from 'react-router-dom'
import { PageRoutes } from '../shared/enums'
import { auth } from '../firebase/firebaseConfig'

type PendingPageHook = {
  backButtonHandler: VoidFunction
}

function usePendingPage(): PendingPageHook {
  const navigate = useNavigate()

  const backButtonHandler = () => {
    localStorage.clear()
    auth.currentUser?.delete()
    navigate(PageRoutes.REGISTER_ROUTE)
  }

  return { backButtonHandler }
}

export default usePendingPage
