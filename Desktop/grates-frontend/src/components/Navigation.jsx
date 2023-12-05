import React from 'react';
import Home from '../Home';
import Login from '../pages/Login';
import Registration from '../pages/registration/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exaxt path="/registration" element={<Registration/>}/>
            </Routes>

        </BrowserRouter>
    );
};

export default Navigation;