import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageRoutes } from '../shared/enums'

export function useDefaultRedirect() {
  const navigate = useNavigate()
  const user = localStorage.getItem('user')

  useEffect(() => {
    if (user) {
      navigate(PageRoutes.HOME_ROUTE)
    } else {
      navigate(PageRoutes.LOGIN_ROUTE)
    }
  }, [user])
}
