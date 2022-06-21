import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToSignup } from '../routes/coordinator';
import { requestLogin } from '../services/requests';
import { Button, TextField } from '@mui/material';
import logoLogin from '../img/logoLogin.png';
import styled from "styled-components";

const Screencontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 10vh;
`

const LogoImage = styled.img`
    width: 130px;
    height: 70px;
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

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate()
    const onChangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const login = (e) => {
        e.preventDefault()
        requestLogin(form, navigate)
    }
    useEffect(() => {
        const token = window.localStorage.getItem("token-labefood")
        if (token) {
            goToFeedPage(navigate)
        }
    }, [])
    return (
        <Screencontainer>
            <LogoImage src={logoLogin} alt={"Imagem da logo"} />
            <InputsContainer onSubmit={login}>
                <TextField
                    id="outlined-basic"
                    label="E-mail"
                    variant="outlined"
                    name="email"
                    value={form.email}
                    onChange={onChangeForm}
                    required
                    fullWidth
                />

                <TextField
                    id="outlined-basic"
                    label="Senha"
                    variant="outlined"
                    name="password"
                    value={form.password}
                    type="password"
                    onChange={onChangeForm}
                    required
                    fullWidth
                />

                <Button variant="contained" type="submit" fullWidth>Entrar</Button>
                <Button variant="contained" fullWidth onClick={() => goToSignup(navigate)}>Cadastrar</Button>
            </InputsContainer>
        </Screencontainer>
    )
}