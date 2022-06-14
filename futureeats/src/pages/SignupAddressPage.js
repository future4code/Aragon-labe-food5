import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToSignupAddressPage } from '../routes/coordinator';
import { Button } from '@mui/material';
import { requestCadastro } from '../services/requests';


export default function SignupAddressPage() {

    const [form, setForm] = useState({
        street: "",
        number: "",
        complement: "",
        district: "",
        city: "",
        state: ""
    })

    const navigate = useNavigate()

    const onChangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const cadastro = (e) => {
        e.preventDefault()
        requestCadastro(form, navigate)
    }

    useEffect(() => {
        const token = window.localStorage.getItem("token-labefood")
        if (token) {
            goToSignupAddressPage(navigate)
        }
    }, [])

    return (
        <section>
            {/* <Header  /> */}
            <main>
                <h1>Cadastro de Endereço</h1>
                <form onSubmit={cadastro}>
                    <label htmlFor="rua" >Rua:</label>
                    <input 
                    placeholder='Rua'
                    id="rua" 
                    name="street" 
                    value={form.street} 
                    onChange={onChangeForm} 
                    required 
                    />
                    <br />
                    <br />
                    <label htmlFor="numero" >Número:</label>
                    <input 
                    placeholder='Número'
                    id="numero" 
                    name="number" 
                    value={form.number} 
                    onChange={onChangeForm} 
                    required 
                    />
                    <br />
                    <br />
                    <label htmlFor="complemento" >Complemento:</label>
                    <input 
                    placeholder='Complemento'
                    id="complemento" 
                    name="complement" 
                    value={form.complement} 
                    onChange={onChangeForm} 
                    required 
                    />
                    <br />
                    <br />
                    <label htmlFor="bairro" >Bairro:</label>
                    <input
                    placeholder='Bairro'
                    id="bairro" 
                    name="district" 
                    value={form.district} 
                    onChange={onChangeForm} 
                    required 
                    />
                    <br />
                    <br />
                    <label htmlFor="cidade" >Cidade:</label>
                    <input 
                    placeholder='Cidade'
                    id="cidade" 
                    name="city" 
                    value={form.city} 
                    onChange={onChangeForm} 
                    required 
                    />
                    <br />
                    <br />
                    <label htmlFor="estado" >Estado:</label>
                    <input 
                    placeholder='Estado'
                    id="estado" 
                    name="state" 
                    value={form.state} 
                    onChange={onChangeForm} 
                    required 
                    />
                    <br />
                    <br />
                    <Button onClick={() => goToFeedPage(navigate)} variant="contained">Cadastrar</Button>
                </form>
                <br />
            </main>
        </section>
    )
}
