import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedPage from '../pages/FeedPage';
import Login from '../pages/Login';
import SignupAddressPage from '../pages/SignupAddressPage';
import ScreenPage from '../components/ScreenPage';
import SignupPage from '../pages/SignupPage';
import DetailsPage from '../pages/DetailsPage';
import Profile from '../pages/Profile';
import CartPage from '../pages/CartPage'

function Router () {

        return (
            <BrowserRouter>
            <Routes>

                <Route index element={<ScreenPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup/address" element={<SignupAddressPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/restaurants/:restaurantId" element={<DetailsPage/>}/>
                <Route path="/feedPage" element={<FeedPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>

            </Routes>
            </BrowserRouter>
        );
    
}
export default Router