import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/registration/Registration';

const Home = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Main page</h1>
            <button onClick={() => navigate("/login")}> Go to login</button>
            <button onClick={() => navigate("/registration")}> Go to registration</button>

        </div>
    );
};

export default Home;