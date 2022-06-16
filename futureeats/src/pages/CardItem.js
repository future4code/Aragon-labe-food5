import React from 'react';
import { adjustPrice } from '../utils/adjustPrice';

function CardItem (props) {

        return (
            <section>
                <img width={"50px"} src={props.product.photoUrl} alt={`foto de ${props.product.name}`}/>
                <h2>{props.product.name}</h2>
                <p>{props.product.description}</p>
                <p>{adjustPrice(props.product.price) }</p>
            </section>

        );
    
}

export default CardItem;