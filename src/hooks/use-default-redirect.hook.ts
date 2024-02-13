import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageRoutes } from '../shared/enums'

export function useDefaultRedirect() {
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('user')

    if (user) {
      navigate(PageRoutes.HOME_ROUTE)
    } else {
      navigate(PageRoutes.LOGIN_ROUTE)
    }
  }, [navigate])
}
