import React from 'react';
import { useNavigate } from 'react-router-dom';

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