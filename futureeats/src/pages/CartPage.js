import React, {useContext } from 'react';
import GlobalStateContext from "../global/GlobalStateContext"
import Footer from '../components/Footer';
import styled from "styled-components";
import { Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 98vw;
    margin-bottom: 7vh;
    margin-top: 1vh;
`

const Screencontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-style: solid;
    border-radius: 5px;
    border-color: #b8b8b8;

h1{
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

const Payment = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 98vw;
margin-bottom: 8vh;
`

function CartPage() {

    const context = useContext(GlobalStateContext)

    const { states } = context

    return (
        <div>
            {states.cart.map((plate) => {
                return (
                    <Div>
                        <Screencontainer>
                        <img width={"150px"} src={plate.photoUrl} alt={`foto de ${plate.name}`} />
                            <h1>{plate.name}</h1>
                            <p>{plate.description}</p>
                            <p>R${plate.price},00</p>
                            <Button>Remover</Button>
                        </Screencontainer>
                    </Div>
    )
})}
<Payment>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Método de Pagamento</FormLabel>
                                <hr />
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="Apenas 1 seleção"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="cartao"
                                        control={<Radio />}
                                        label="Cartão de crédito"
                                    />
                                    <FormControlLabel
                                        value="dinheiro"
                                        control={<Radio />}
                                        label="Dinheiro"
                                    />
                                    <FormControlLabel
                                        value="pix"
                                        control={<Radio />}
                                        label="Pix"
                                    />
                                </RadioGroup>
                                <Button variant="contained" type="submit" fullwidth>Confirmar</Button>
                            </FormControl>
                        </Payment>
                        <Footer />
        </div >
    );

}

export default CartPage;