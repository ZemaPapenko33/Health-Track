import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import { pageRoutes } from "../shared/enum";

const Routers = () => {
  return (
    <Routes>
      <Route path={pageRoutes.HOME_ROUTE} element={<HomePage />} />
      <Route path={pageRoutes.LOGIN_ROUTE} element={<LoginPage />} />
      <Route path={pageRoutes.REGISTER_ROUTE} element={<RegisterPage />} />
    </Routes>
  );
};

export default Routers;
