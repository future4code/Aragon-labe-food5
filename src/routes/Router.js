import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScreenPage from '../components/ScreenPage';
import Login from '../pages/Login';
import SignupPage from '../pages/SignupPage';
import SignupAddressPage from '../pages/SignupAddressPage';
import FeedPage from '../pages/FeedPage';
import DetailsPage from '../pages/DetailsPage';
import CartPage from '../pages/CartPage'
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import EditAddress from '../pages/EditAddress';

function Router () {

        return (
            <BrowserRouter>
            <Routes>

                <Route index element={<ScreenPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/signup/address" element={<SignupAddressPage/>}/>
                <Route path="/feedPage" element={<FeedPage/>}/>
                <Route path="/restaurants/:restaurantId" element={<DetailsPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/editprofile" element={<EditProfile/>}/>
                <Route path="/editaddress" element={<EditAddress/>}/>

            </Routes>
            </BrowserRouter>
        );
    
}
export default Router