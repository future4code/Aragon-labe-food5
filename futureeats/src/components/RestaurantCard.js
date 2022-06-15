import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToDetailsPage } from '../routes/coordinator';

function RestaurantCard(props) {

    const navigate = useNavigate()


    return (
        <div>
            <section key={props.restaurant.restaurantId}>
                <hr />
                <button onClick={() => goToDetailsPage(navigate, props.restaurant.restaurantId)} >
                    <img src={props.restaurant.logoUrl} alt="name"/></button>
                <h2 >{props.restaurant.name}</h2>
                <h2>{props.restaurant.address}</h2>
                <h2>{props.restaurant.deliveryTime - 10}
                    {" - "}
                    {props.restaurant.deliveryTime + 10}
                    {" min"}</h2>
                <h2>{props.restaurant.category}</h2>
                <h2>Frete R$ {props.restaurant.shipping},00 </h2>
            </section>
        </div>
    )
}

export default RestaurantCard;