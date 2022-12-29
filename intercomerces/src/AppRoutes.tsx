import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Smartphones from './pages/Smartphones';

// importar paginas aqui

function AppRoutes() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/smartphones" element={<Smartphones/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default AppRoutes;