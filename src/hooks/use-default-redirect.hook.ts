import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { PageRoutes } from '../shared/enums'

export function useDefaultRedirect() {
  const navigate = useNavigate()
  const location = useLocation()
  const user = localStorage.getItem('user')
  const registration = localStorage.getItem('registration')
  const userAuth = localStorage.getItem('userAuth')

  useEffect(() => {
    switch (location.pathname) {
      case PageRoutes.HOME_ROUTE:
        if (!userAuth && !registration) {
          navigate(PageRoutes.LOGIN_ROUTE)
        } else if (registration) {
          navigate(PageRoutes.PROFILE_ROUTE)
        }
        break
      case PageRoutes.LOGIN_ROUTE:
        if (userAuth) navigate(PageRoutes.HOME_ROUTE)
        break
      case PageRoutes.REGISTER_ROUTE:
        if (userAuth) navigate(PageRoutes.HOME_ROUTE)
        break
      case PageRoutes.PENDING_ROUTE:
        if (!user && !registration) {
          navigate(PageRoutes.LOGIN_ROUTE)
        } else if (userAuth) {
          navigate(PageRoutes.HOME_ROUTE)
        }
        break
      case PageRoutes.PROFILE_ROUTE:
        if (!userAuth && !registration) {
          navigate(PageRoutes.LOGIN_ROUTE)
        } else if (userAuth) {
          navigate(PageRoutes.HOME_ROUTE)
        }
        break
    }
  }, [user, registration, navigate, location.pathname, userAuth])
}
