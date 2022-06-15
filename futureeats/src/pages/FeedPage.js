import { Button } from '@mui/material';
import { goToLoginPage } from '../routes/coordinator';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getRestaurants } from '../services/requests';
import { BASE_URL } from '../constants/urls';
import axios from "axios"
import Header from '../components/Header';
function FeedPage() {

    // const {restaurantId} = useParams()
    // const [restaurant] = useRestaurantDetail(restaurantId)
    // const storeContext = useContext(StoreContext)

    const navigate = useNavigate()

    const [listRestaurants, setListRestaurants] = useState([])



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

    const getRestaurants = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/restaurants`, {
                headers: {
                    auth: window.localStorage.getItem("token-labefood")
                }
            });
            setListRestaurants(response.data.restaurants)
        } catch (error) {
            console.log(error.response.data.message);
            return error.response.data;
        }
    };



    return (
        <main>
            <Header />
            <Button onClick={logout} >Sair</Button>
            {listRestaurants.map((restaurants) => (

                <article key={restaurants.id}>
                    <button ><img src={restaurants.logoUrl} alt="name"></img></button>
                    <h2>{restaurants.name}</h2>
                    <h2>{restaurants.address}</h2>
                    <h2>Tempo de entrega: {restaurants.deliveryTime} min</h2>
                    <h2>{restaurants.category}</h2>
                    <h2>frete:R$ {restaurants.shipping},00 </h2>
                    <h2><button></button></h2>
                    
                </article>

            ))}
        </main>
    );

}

export default FeedPage;