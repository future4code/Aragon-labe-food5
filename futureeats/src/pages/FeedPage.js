import { TextField } from '@mui/material';
import { goToLoginPage } from '../routes/coordinator';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/urls';
import axios from "axios"
import RestaurantCard from '../components/RestaurantCard';
import styled from "styled-components";
import Footer from '../components/Footer';

const Screencontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 98vw;
    margin-bottom: 7vh;
`

const InputsContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    max-width: 450px;
	padding: 1%;

    button{
        text-transform: capitalize;
        font-size: 16px;
    }
`

function FeedPage() {

    const navigate = useNavigate()

    const [restaurants, setRestaurants] = useState([])

    const [find, setFind] = useState("")

    const logout = () => {
        window.localStorage.removeItem("token-labefood")
        goToLoginPage(navigate)
    }

    useEffect(() => {
        const token = window.localStorage.getItem("token-labefood")
        if (!token) {
            goToLoginPage(navigate)
        }
    }, [])

    useEffect(() => {
        getRestaurants()
    }, [])

    const onChangeFind = (e) => {
        setFind(e.target.value)
    }

    const getRestaurants = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/restaurants`, {
                headers: {
                    auth: window.localStorage.getItem("token-labefood")
                }
            });
            setRestaurants(response.data.restaurants)
        } catch (error) {
            console.log(error.response.data.message);
            return error.response.data;
        }
    };


    const showRestaurants = restaurants ? restaurants
        .filter((restaurant) => {

            const textFind = find.toLowerCase()
            const restaurantsFiltered = restaurant.name.toLowerCase()
            const restaurantsDescriptionFiltered = restaurant.description.toLowerCase()
            return restaurantsFiltered.includes(textFind) ||
                restaurantsDescriptionFiltered.includes(textFind)
        })
        .map((restaurant) => {
            return (
                <RestaurantCard
                    key={restaurant.restaurantId}
                    restaurant={restaurant}
                />
            )
        }) : <p>Carregando...</p>


    return (
        <Screencontainer>
            <InputsContainer>
                <TextField
                    id="outlined-basic"
                    label="Buscar"
                    variant="outlined"
                    value={find}
                    onChange={onChangeFind}
                    fullWidth
                />
                {showRestaurants}
                <Footer />
            </InputsContainer>
        </Screencontainer>
    );
}

export default FeedPage;