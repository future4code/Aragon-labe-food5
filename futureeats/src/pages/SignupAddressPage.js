import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from '../routes/coordinator';
import { Button, TextField } from '@mui/material';
import { requestAddress } from '../services/requests';
import logoLogin from '../img/logoLogin.png';
import styled from "styled-components";

const Screencontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 12vh;
`

const LogoImage = styled.img`
    width: 110px;
    height: 60px;
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
        <Screencontainer>
            <LogoImage src={logoLogin} alt={"Imagem da logo"} />
            <InputsContainer onSubmit={register}>
                <label htmlFor="rua" ></label>
                <TextField
                    id="outlined-basic"
                    label="Rua"
                    variant="outlined"
                    placeholder='Rua'
                    name="street"
                    value={form.street}
                    onChange={onChangeForm}
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
                    value={form.number}
                    onChange={onChangeForm}
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
                    value={form.complement}
                    onChange={onChangeForm}
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
                    value={form.neighbourhood}
                    onChange={onChangeForm}
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
                    value={form.city}
                    onChange={onChangeForm}
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
                    value={form.state}
                    onChange={onChangeForm}
                    required
                    fullWidth
                />
                <Button variant="contained" fullWidth type="submit">Cadastrar</Button>
            </InputsContainer>
        </Screencontainer>
    );
}
