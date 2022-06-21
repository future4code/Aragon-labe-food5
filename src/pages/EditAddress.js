import React from 'react';
import { Button, TextField } from '@mui/material';
import Footer from '../components/Footer';
import styled from "styled-components";

const Screencontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 12vh;
`

const InputsContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    width: 100vw;
    max-width: 450px;
	padding: 1%;

    button{
        text-transform: capitalize;
        font-size: 16px;
    }
`

export default function EditAddress() {

    return (
        <Screencontainer>
            <InputsContainer>
                <label htmlFor="rua" ></label>
                <TextField
                    id="outlined-basic"
                    label="Rua"
                    variant="outlined"
                    placeholder='Rua'
                    name="street"
                    required
                    fullWidth
                />

                <label htmlFor="numero" ></label>
                <TextField
                    id="outlined-basic"
                    label="Número"
                    variant="outlined"
                    placeholder='Número'
                    name="number"
                    required
                    fullWidth
                />

                <label htmlFor="complemento" ></label>
                <TextField
                    id="outlined-basic"
                    label="Complemento"
                    variant="outlined"
                    placeholder='Complemento'
                    name="complement"
                    required
                    fullWidth
                />

                <label htmlFor="bairro" ></label>
                <TextField
                    id="outlined-basic"
                    label="Bairro"
                    variant="outlined"
                    placeholder='Bairro'
                    name="neighbourhood"
                    required
                    fullWidth
                />

                <label htmlFor="cidade" ></label>
                <TextField
                    id="outlined-basic"
                    label="Cidade"
                    variant="outlined"
                    placeholder='Cidade'
                    name="city"
                    required
                    fullWidth
                />

                <label htmlFor="estado" ></label>
                <TextField
                    id="outlined-basic"
                    label="Estado"
                    variant="outlined"
                    placeholder='Estado'
                    name="state"
                    required
                    fullWidth
                />
                <Button variant="contained" fullWidth type="submit">Editar</Button>
                <Footer/>
            </InputsContainer>
        </Screencontainer>
    );
}