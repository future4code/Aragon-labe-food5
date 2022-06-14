import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from '../pages/Signup';
import Carrinho from '../pages/Cart';
import DetalhesPage from '../pages/DetailsPage';
import FeedPage from '../pages/FeedPage';
import Login from '../pages/Login';
import Perfil from '../pages/Profile';
import SignupAddressPage from '../pages/SignupAddressPage';

function Router () {
   
        return (
            <BrowserRouter>
            <Routes>
                <Route index element={<FeedPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup/address" element={<SignupAddressPage/>}/>
                <Route path="/signup" element={<Cadastro/>}/>
                <Route path="/profile" element={<Perfil/>}/>
                <Route path="/cart" element={<Carrinho/>}/>
                <Route path="/restaurants/:restaurantId" element={<DetalhesPage/>}/>
                <Route path="/restaurants" element={<FeedPage/>}/>
            </Routes>
            </BrowserRouter>
        );
    
}

export default Router;