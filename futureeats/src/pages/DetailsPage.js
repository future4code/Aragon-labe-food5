import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import RestaurantCard from '../components/RestaurantCard';
import { BASE_URL } from '../constants/urls';
import { goToLoginPage } from '../routes/coordinator';
import CardItem from './CardItem';


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


    const getRestaurantDetail = async (restaurantId) => {
        try {
            const response = await axios
        .get(`${BASE_URL}/restaurants/${restaurantId}`,headers)
                console.log(response.data)
            setRestaurantDetails(response.data)

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

        getRestaurantDetail(params.restaurantId)
        console.log(restaurantDetails)
    }, [])

    const showProducts = restaurantDetails.restaurant &&
     restaurantDetails.restaurant.products.map((product)=> {
        
        return (
            <CardItem
            key={product.id}
            product={product}
            />
        )
     })

    return (
        <div>
            <Header/>

            <RestaurantCard
            key={restaurantDetails.restaurant?.id}
            restaurant={restaurantDetails.restaurant}
            isDetail={true}
            />
            {showProducts}

        </div>
    );

}

export default DetailsPage;