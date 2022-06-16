import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToDetailsPage } from '../routes/coordinator';
import styled from 'styled-components';

const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 15%;

img{
    height: 160px;
}
`

function RestaurantCard(props) {

    const navigate = useNavigate()


    return (
        <Main>
            <section key={props.restaurant.restaurantId}>
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
        </Main>
    )
}

export default RestaurantCard;