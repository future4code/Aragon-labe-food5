import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import RestaurantCard from '../components/RestaurantCard';
import { BASE_URL } from '../constants/urls';
import { goToLoginPage } from '../routes/coordinator';

function DetailsPage() {
    const [restaurantDetails, setRestaurantDetails] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const token = localStorage.getItem("token-labefood")
    const headers = {
        headers: {
            auth: token
        }
    }
    const getRestaurantDetail = async () => {
        try {
            const response = await axios
        .get(`${BASE_URL}/restaurants/${params.restaurantId}`,headers)
                console.log(response.data.restaurant)
            setRestaurantDetails(response.data.restaurant)
       
        }catch (error) {
            console.log(error.response.data.message);
            return error.response.data;
        }
    }

    useEffect(() => {
        const token = window.localStorage.getItem("token-labefood")
        if (!token) {
            goToLoginPage(navigate)
        }
    }, [])

    useEffect(() => {
        getRestaurantDetail()
    }, [])


    return (
        <div>
            <Header/>
            <RestaurantCard
            key={restaurantDetails.id}
            restaurant={restaurantDetails}
            isDetail={true}
            />

        </div>
    );

}

export default DetailsPage;