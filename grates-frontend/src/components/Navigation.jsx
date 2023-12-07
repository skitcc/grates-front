import React from 'react';
import Home from '../Home';
import Login from '../pages/Login';
import Registration from '../pages/registration/Registration';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from '../pages/MainPage';


const Navigation = () => {
    const token = localStorage.getItem("token")

    const PrivateRoute = ({children, token}) => {

       return token ? children : <Navigate to="/login" element/>

    }
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exaxt path="/registration" element={<Registration/>}/>
                <Route path="/main" element={
                    <PrivateRoute token={token}>
                        <MainPage/>
                    </PrivateRoute>
                }/>            
            </Routes>

        </BrowserRouter>
    );
};

export default Navigation;