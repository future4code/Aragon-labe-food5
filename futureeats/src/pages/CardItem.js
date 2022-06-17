import React, { useContext } from "react"
import { adjustPrice } from '../utils/adjustPrice';
import GlobalStateContext from '../global/GlobalStateContext';

function CardItem(props) {

    const context = useContext(GlobalStateContext)

    const {setters} = context

    return (
        <section>

            <img width={"50px"} src={props.product.photoUrl} alt={`foto de ${props.product.name}`} />
            <h2>{props.product.name}</h2>
            <p>{props.product.description}</p>
            <p>{adjustPrice(props.product.price)}</p>
            <button onClick={ () => setters.addCart(props.product)}>Adicionar ao carrinho</button>
        </section>

    );

}

export default CardItem;