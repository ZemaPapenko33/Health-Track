import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageRoutes } from '../shared/enums'

const HomePage = (): JSX.Element => {
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('user')

    if (!user) {
      navigate(PageRoutes.LOGIN_ROUTE)
    }
  }, [navigate])

  return <div>Home page</div>
}

export default HomePage
