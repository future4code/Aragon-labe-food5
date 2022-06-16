import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalhesPage from '../pages/DetailsPage';
import FeedPage from '../pages/FeedPage';
import Login from '../pages/Login';
import Perfil from '../pages/Profile';
import SignupAddressPage from '../pages/SignupAddressPage';
import ScreenPage from '../components/ScreenPage';
import SignupPage from '../pages/SignupPage';

function Router () {

        return (
            <BrowserRouter>
            <Routes>
                <Route index element={<ScreenPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup/address" element={<SignupAddressPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/profile" element={<Perfil/>}/>
                <Route path="/restaurants/:restaurantId" element={<DetalhesPage/>}/>
                <Route path="/feedPage" element={<FeedPage/>}/>
            </Routes>
            </BrowserRouter>
        );
    
}
export default Router;