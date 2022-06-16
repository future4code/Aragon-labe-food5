import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import { goToFeedPage, goToSignup } from '../routes/coordinator';
import { requestLogin } from '../services/requests';
import { Button, TextField } from '@mui/material';
export default function Login () {
	const [form, setForm] = useState({
		email: "",
		password: "",
})
	const navigate = useNavigate()
	const onChangeForm = (e) => { 
		setForm({...form, [e.target.name]: e.target.value})
	}
	const login = (e) => {
		e.preventDefault()
		requestLogin(form,navigate)
    	}
    	useEffect(() => {
        	const token = window.localStorage.getItem("token-labefood")
       		 if (token) {
            		goToFeedPage(navigate)
       		}
 	}, [])
	return (
		<section>
			<Header  />
			<main>
				<h1>Login</h1>
				<form onSubmit={login}>
                    <TextField
                    id="standard-basic" 
                    label="E-mail" 
                    variant="standard" 
                    name="email" 
                    value={form.email} 
                    onChange={onChangeForm} 
                    required/>
                    <br />
                    <TextField 
                    id="standard-basic" 
                    label="Senha" 
                    variant="standard" 
                    id="senha" 
                    name="password" 
                    value={form.password} 
                    type="password" 
                    required 
                    onChange={onChangeForm} />
					<br />
					<Button type="submit" variant="contained">Entrar</Button>
				</form>
				<br/>
				<Button onClick={() => goToSignup(navigate)} variant="contained">Cadastrar</Button>
				{/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
			</main>
		</section>
	)
}