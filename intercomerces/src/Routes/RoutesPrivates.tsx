import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Screens/Login';

    function RoutesPrivates(props:any){
        return(
        <Routes>
            <Route path="/login" element={<Login />}/>
        </Routes>);
    }
    
    export default RoutesPrivates;