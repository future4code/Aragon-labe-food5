import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToLoginPage } from '../routes/coordinator';
import { Button } from '@mui/material';
import { requestCadastro } from '../services/requests';
import goToSignupAddressPage from './SignupAddressPage';


export default function Cadastro () {

	const [form, setForm] = useState({
		email: "",
		password: "",
		name: "",
		cpf:""
	})

	const navigate = useNavigate()

	const onChangeForm = (e) => { 
		setForm({...form, [e.target.name]: e.target.value})
	}

	const cadastro = (e) => {
		e.preventDefault()
		requestCadastro(form,navigate)
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
				<h1>Cadastro</h1>
				<form onSubmit={cadastro}>
					<label htmlFor="nome" >Nome:</label>
					<input id="nome" name="name" value={form.name} onChange={onChangeForm} required />
					<br />
					<br/>
					<label htmlFor="email" >E-mail:</label>
					<input id="email" name="email" value={form.email} onChange={onChangeForm} required />
					<br />
					<br/>
					<label htmlFor="cpf" >CPF:  </label>
					<input id="cpf"pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" name="cpf" value={form.cpf} 
                    required onChange={onChangeForm} />
					<br/>
					<br/>
					<label htmlFor="senha" >Senha:</label>
					<input id="senha" name="password" value={form.password} type= {"password"} required onChange={onChangeForm} />
					<br />		
					<br/>
                    <Button onClick={cadastro} variant="contained">Criar</Button>
				</form>
				<br/>
				<p>Já Possui Cadastro? </p>
				<Button onClick={() => goToLoginPage(navigate)} variant="contained">clique aqui</Button>
			</main>
		</section>
	)
}