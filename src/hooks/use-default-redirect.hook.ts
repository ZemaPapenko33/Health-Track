import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { PageRoutes } from '../shared/enums'

export function useDefaultRedirect() {
  const navigate = useNavigate()
  const location = useLocation()
  const user = localStorage.getItem('user')
  const registration = localStorage.getItem('registration')

  useEffect(() => {
    if (user && !registration) {
      navigate(PageRoutes.HOME_ROUTE)
    } else if (!user && location.pathname !== PageRoutes.REGISTER_ROUTE) {
      navigate(PageRoutes.LOGIN_ROUTE)
    } else if (location.pathname === PageRoutes.PENDING_ROUTE && !registration) {
      navigate(PageRoutes.LOGIN_ROUTE)
    }
  }, [user, registration, navigate, location.pathname])
}
