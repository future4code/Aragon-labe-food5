import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToDetailsPage } from '../routes/coordinator';

function RestaurantCard(props) {

    const navigate = useNavigate()


    return (
        <>
            <section 
            key={props.restaurant?.restaurantId}
            onClick={() => goToDetailsPage(navigate, props.restaurant?.restaurantId)}
            >

                <hr />
                <button  >
                    <img width={"50px"} src={props.restaurant?.logoUrl} alt={`logo do restaurante ${props.restaurant?.name}`}/></button>
                <h2 >{props.restaurant?.name}</h2>
                {props.isDetail === true && <h2>{props.restaurant?.category}</h2>}
                <h2>{props.restaurant?.deliveryTime - 10}- 
                    {props.restaurant?.deliveryTime + 10} min</h2>           
                <h2>Frete R$ {props.restaurant?.shipping},00 </h2>
                {props.isDetail === true && <h2>{props.restaurant?.address}</h2>}
            </section>
        </>
    )
}

export default RestaurantCard;

