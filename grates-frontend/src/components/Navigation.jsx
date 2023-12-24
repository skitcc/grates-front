import React from "react";
import Home from "../Home";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "../app/store";
import { Provider } from "react-redux";
import MainPage from "../pages/newsFeed/MainPage";
import RequireAuth from "../features/auth/RequireAuth";

const Navigation = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

          <Route element={<RequireAuth />}>
            <Route path="/main" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Navigation;
