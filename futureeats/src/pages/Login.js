import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { goToFeedPage, goToSignup } from '../routes/coordinator';

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
		axios.post ("https://us-central1-missao-newton.cloudfunctions.net/{{appName}}/login", form)
			.then((res) => {
				alert(res.data.message)
				window.localStorage.setItem("token-labefood", res.data.token)
				goToFeedPage(navigate)
                console.log(form)
			})
			.catch((err) => {
               			console.error("Erro ao se cadastrar")
               			console.log(err)
            		})
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
				<h1>Login</h1>
				<form onSubmit={login}>
					<label htmlFor="email" >E-mail:</label>
					<input id="email" name="email" value={form.email} onChange={onChangeForm} required/>
					<br />
					<label htmlFor="senha" >Senha:</label>
					<input id="senha" name="password" value={form.password} type="password" required onChange={onChangeForm} />
					<br />
					<button onClick={()=> goToFeedPage(navigate)}>Entrar</button>
				</form>
				<button onClick={() => goToSignup(navigate)}>Cadastrar</button>
			</main>
		</section>
	)
}