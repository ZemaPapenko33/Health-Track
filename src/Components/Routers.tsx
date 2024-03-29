import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import { PageRoutes } from '../shared/enums'
import PendingConfirmationPage from '../Pages/PendingConfirmationPage'
import ProfilePage from '../Pages/ProfilePage'

const Routers = () => {
  return (
    <Routes>
      <Route path={PageRoutes.HOME_ROUTE} element={<HomePage />} />
      <Route path={PageRoutes.LOGIN_ROUTE} element={<LoginPage />} />
      <Route path={PageRoutes.REGISTER_ROUTE} element={<RegisterPage />} />
      <Route path={PageRoutes.PENDING_ROUTE} element={<PendingConfirmationPage />} />
      <Route path={PageRoutes.PROFILE_ROUTE} element={<ProfilePage />} />
    </Routes>
  )
}

export default Routers
