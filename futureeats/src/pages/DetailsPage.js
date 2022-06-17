import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';
import { BASE_URL } from '../constants/urls';
import { goToLoginPage, goToFeedPage } from '../routes/coordinator';
import CardItem from './CardItem';
import { Button } from '@mui/material';
import styled from "styled-components";

const Screencontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 12vh;

button{
    text-transform: capitalize;
    font-size: 16px;
}
`

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
        <Screencontainer>
            <main>
                <RestaurantCard
                key={restaurantDetails.restaurant?.id}
                restaurant={restaurantDetails.restaurant}
                isDetail={true}
                />
                {showProducts}
                <Button variant="contained" fullWidth onClick={() => goToFeedPage(navigate)}>Voltar</Button>
            </main>
        </Screencontainer>
    );

}

export default DetailsPage;