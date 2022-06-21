import React, { useContext } from "react"
import { adjustPrice } from '../utils/adjustPrice';
import GlobalStateContext from '../global/GlobalStateContext';
import styled from "styled-components"
import { Button } from '@mui/material';

const Descricao = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 15%;
border-style: solid;
border-radius: 5px;
border-color: #b8b8b8;

h2{
    font-size: 16px;
    color: #5cb646;
}

p{
    color: #b8b8b8
}

button{
        text-transform: capitalize;
        font-size: 14px;
    }
`

function CardItem(props) {

    const context = useContext(GlobalStateContext)

    const { setters } = context

    return (
        <section>
            <Descricao>
                <img width={"150px"} src={props.product.photoUrl} alt={`foto de ${props.product.name}`} />
                <h2>{props.product.name}</h2>
                <p>{props.product.description}</p>
                <p>{adjustPrice(props.product.price)}</p>
                <Button onClick={() => setters.addCart(props.product)}>Adicionar</Button>
            </Descricao>
        </section>

    );

}

export default CardItem;