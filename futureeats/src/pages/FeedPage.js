import { Button } from '@mui/material';
import { goToDetailsPage, goToLoginPage } from '../routes/coordinator';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/urls';
import axios from "axios"
import Header from '../components/Header';
import RestaurantCard from '../components/RestaurantCard';

function FeedPage() {

    const navigate = useNavigate()

    const [restaurants, setRestaurants] = useState([])

    const [find,setFind] = useState("")


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


    const showRestaurants = restaurants? restaurants
    .filter((restaurant)=> {
        const textFind = find.toLowerCase()
        const restaurantsFiltered = restaurant.name.toLowerCase()
        const restaurantsDescriptionFiltered = restaurant.description.toLowerCase()
        return restaurantsFiltered.includes(textFind) || 
        restaurantsDescriptionFiltered.includes(textFind)
    })
    .map((restaurant) => {
        return(
            <RestaurantCard
            key={restaurant.restaurantId}
            restaurant={restaurant}
            />
        )
    }):<p>Carregando...</p>


    return (
        <main>
            <Header />
            <Button onClick={logout} >Sair</Button>
            <input 
            value={find} 
            onChange={onChangeFind} 
            placeholder='Buscar Restaurante'
            />
            {showRestaurants}

            {/* <Footer/> */}
        </main>
    );
}

export default FeedPage;