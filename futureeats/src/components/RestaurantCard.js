import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToDetailsPage } from '../routes/coordinator';
import styled from 'styled-components';

const Main = styled.main`
margin-top: 15%;

img{
    border-radius: 5px;
}

h2{
    font-size: 14px;
    color: #b8b8b8;
}
`

function RestaurantCard(props) {
    const navigate = useNavigate()
    return (

        <Main>
            <section key={props.restaurant?.restaurantId} onClick={() => goToDetailsPage(navigate, props.restaurant?.id)}>
                <img width={"180px"} src={props.restaurant?.logoUrl} alt={`logo do restaurante ${props.restaurant?.name}`} />
                <h2>{props.restaurant?.name}</h2>
                {props.isDetail === true && <h2>{props.restaurant?.category}</h2>}
                <h2>{props.restaurant?.deliveryTime - 10}-
                    {props.restaurant?.deliveryTime + 10} min</h2>
                <h2>Frete R$ {props.restaurant?.shipping},00 </h2>
                {props.isDetail === true && <h2>{props.restaurant?.address}</h2>}
            </section>
            <br />
        </Main>
    )
}

export default RestaurantCard;


