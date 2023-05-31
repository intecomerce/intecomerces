import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsList from '../Screens/ProdutosList';
import Profile from '../Screens/App/Profile';
import Logout from '../Screens/App/Logout';
import PrivateHome from '../Screens/App/PrivateHome';
import Favorites from '../Screens/App/Favorites';
import LitleCar from '../Screens/App/LitleCar';

function RoutesPrivates(props: any) {
    return (
        <Routes>
            <Route path="/" element={<PrivateHome />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/litleCar" element={<LitleCar />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>);
}

export default RoutesPrivates;