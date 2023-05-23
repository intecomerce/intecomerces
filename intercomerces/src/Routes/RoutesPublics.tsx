import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Screens/Login';
import Home from '../Screens/Home';

function RoutesPublics(props: any) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>);
}

export default RoutesPublics;