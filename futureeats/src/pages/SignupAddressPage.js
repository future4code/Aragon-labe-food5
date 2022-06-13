import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from '../routes/coordinator';
import { Button } from '@mui/material';
import { requestCadastro } from '../services/requests';


export default function SignupAddressPage() {

    const [form, setForm] = useState({
        email: "",
        password: "",
        name: "",
        cpf: ""
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
            goToFeedPage(navigate)
        }
    }, [])

    return (
        <section>
            {/* <Header  /> */}
            <main>
                <h1>Cadastro</h1>
                <form onSubmit={cadastro}>
                    <label htmlFor="nome" >Nome:</label>
                    <input id="nome" name="name" value={form.name} onChange={onChangeForm} required />
                    <br />
                    <br />
                    <label htmlFor="email" >E-mail:</label>
                    <input id="email" name="email" value={form.email} onChange={onChangeForm} required />
                    <br />
                    <br />
                    <label htmlFor="cpf" >CPF:  </label>
                    <input id="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" name="cpf" value={form.cpf}
                        required onChange={onChangeForm} />
                    <br />
                    <br />
                    <label htmlFor="senha" >Senha:</label>
                    <input id="senha" name="password" value={form.password} type={"password"} required onChange={onChangeForm} />
                    <br />
                    <br />
                    <label htmlFor="logradouro" >Logradouro:</label>
                    <input placeholder='Rua' id="logradouro" name="logradouro" value={form.logradouro} type={"logradouro"} required onChange={onChangeForm} />
                    <br />
                    <br />
                    <label htmlFor="Número" >Número:</label>
                    <input placeholder='Numero da casa' id="Número" name="Número" value={form.Número} type={"Número"} required onChange={onChangeForm} />
                    <br />

                    <Button onClick={() => goToFeedPage(navigate)} variant="contained">Cadastrar</Button>
                </form>
                <br />
                
            </main>
        </section>
    )
}
