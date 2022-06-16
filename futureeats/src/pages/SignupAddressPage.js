import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from '../routes/coordinator';
import { Button, TextField } from '@mui/material';
import { requestAddress } from '../services/requests';
import styled from 'styled-components';

const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 15%;
`

export default function SignupAddressPage() {

    const [form, setForm] = useState({
        street: "",
        number: "",
        complement: "",
        neighbourhood: "",
        city: "",
        state: ""
    })

    const navigate = useNavigate()

    const onChangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const register = (e) => {
        console.log(form)
        e.preventDefault()
        requestAddress(form, navigate)
    }

    useEffect(() => {
        const token = window.localStorage.getItem("token-labefood")
        if (!token) {
            goToLoginPage(navigate)
        }
    }, [])

    return (
        <section>
            {/* <Header  /> */}
            <Main>
                <h1>Cadastro de Endereço</h1>
                <form onSubmit={register}>
                <label htmlFor="rua" ></label>
                    <TextField 
                    id="standard-basic" 
                    label="Rua" 
                    variant="standard"
                    placeholder='Rua'
                    name="street" 
                    value={form.street} 
                    onChange={onChangeForm} 
                    required
                    
                    />
                    <br />
                    <br />
                    <label htmlFor="numero" ></label>
                    <TextField 
                    id="standard-basic" 
                    label="Número" 
                    variant="standard" 
                    placeholder='Número'
                    name="number" 
                    value={form.number} 
                    onChange={onChangeForm} 
                    required 
                    />
                    <br />
                    <br />
                    <label htmlFor="complemento" ></label>
                    <TextField 
                    id="standard-basic" 
                    label="Complemento" 
                    variant="standard" 
                    placeholder='Complemento'
                    name="complement" 
                    value={form.complement} 
                    onChange={onChangeForm} 
                    required 
                    />
                    <br />
                    <br />
                    <label htmlFor="bairro" ></label>
                    <TextField 
                    id="standard-basic" 
                    label="Bairro" 
                    variant="standard"
                    placeholder='Bairro'
                    name="neighbourhood" 
                    value={form.neighbourhood} 
                    onChange={onChangeForm} 
                    required 
                    />
                    <br />
                    <br />
                    <label htmlFor="cidade" ></label>
                    <TextField 
                    id="standard-basic" 
                    label="Cidade" 
                    variant="standard" 
                    placeholder='Cidade'
                    name="city" 
                    value={form.city} 
                    onChange={onChangeForm} 
                    required 
                    />
                    <br />
                    <br />
                    <label htmlFor="estado" ></label>
                    <TextField 
                    id="standard-basic" 
                    label="Estado" 
                    variant="standard" 
                    placeholder='Estado'
                    name="state" 
                    value={form.state} 
                    onChange={onChangeForm} 
                    required 
                    />
                    <br />
                    <br />
                    <Button type="submit" variant="contained">Cadastrar</Button>
                </form>
                <br />
            </Main>
        </section>
    )
}
