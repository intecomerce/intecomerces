import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import ProdutosList from '../Screens/ProdutosList';

function RoutesPublics(props: any) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProdutosList />} />
        </Routes>);
}

export default RoutesPublics;