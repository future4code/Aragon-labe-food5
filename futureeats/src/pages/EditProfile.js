import React from 'react';
import { Button, TextField } from "@mui/material";
import Footer from '../components/Footer';
import styled from "styled-components";

const Screencontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 10vh;
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

export default function EditProfile() {

    return (
        <Screencontainer>
            <InputsContainer>
                <label htmlFor="name"></label>
                <TextField
                    id="outlined-basic"
                    label="Nome"
                    variant="outlined"
                    name="name"
                    required
                    fullWidth
                />

                <label htmlFor="cpf"></label>
                <TextField
                    id="outlined-basic"
                    label="CPF"
                    variant="outlined"
                    pattern=""
                    name="cpf"
                    type="number"
                    required
                    fullWidth
                />

                <label htmlFor="email"></label>
                <TextField
                    id="outlined-basic"
                    label="E-mail"
                    variant="outlined"
                    name="email"
                    type="email"
                    required
                    fullWidth
                />
                <Button variant="contained" fullWidth type="submit">Editar</Button>
                <Footer />
            </InputsContainer>
        </Screencontainer>
    );
}