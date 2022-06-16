import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToSignupAddressPage } from "../routes/coordinator";
import Header from "../components/Header";
import GlobalStateContext from "../global/GlobalStateContext";
import { Button, TextField } from "@mui/material";
import { requestSignup } from "../services/requests";


 function SignupPage () {

	const navigate = useNavigate();

  const context = useContext(GlobalStateContext);

  const { signUp, checker } = context.states;

  const { setSignUp, setChecker } = context.setters;

  const { postSignUp } = context.posts;

  const onChangeSignUp = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const onChangeChecker = (e) => {
    setChecker({ ...checker, [e.target.name]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();

	const form = {
		name:signUp.name,
		email:signUp.email,
		cpf:signUp.cpf,
		password:signUp.password
	}
    requestSignup(form,navigate)
  };

  return (
    <>
      <Header/>
      <p>Cadastrar</p>

      <form onSubmit={register}>
        <label htmlFor="name"></label>
        <TextField 
          id="standard-basic" 
          label="Nome" 
          variant="standard"
          name="name"
          value={signUp.name}
          onChange={onChangeSignUp}
          required
        />
        <br />

        <label htmlFor="cpf"></label>
        <TextField 
          id="standard-basic" 
          label="CPF" 
          variant="standard"
          pattern=""
          name="cpf"
          type="number"
          value={signUp.cpf}
          onChange={onChangeSignUp}
          required
        />
        <br />

        <label htmlFor="email"></label>
        <TextField 
          id="standard-basic" 
          label="E-mail" 
          variant="standard"
          name="email"
          type="email"
          value={signUp.email}
          onChange={onChangeSignUp}
          required
        />
        <br/>

        <label htmlFor="emailConfirm"></label>
        <TextField 
          id="standard-basic" 
          label="Confirme o e-mail" 
          variant="standard"
          name="emailConfirm"
          value={checker.emailConfirm}
          onChange={onChangeChecker}
          required
        />
        <br />

        <label htmlFor="password"></label>
        <TextField 
          id="standard-basic" 
          label="Senha" 
          variant="standard"
          type="password"
          name="password"
          value={signUp.password}
          onChange={onChangeSignUp}
          required
        />
        <br/>
        <label htmlFor="passwordConfirm"></label>
        <TextField 
          id="standard-basic" 
          label="Confirme a Senha" 
          variant="standard"
          type="password"
          name="passwordConfirm"
          value={checker.passwordConfirm}
          onChange={onChangeChecker}
          required
        />
        <br />
        <Button type="submit">Cadastrar</Button>
      </form>
    </>
  );
}

export default SignupPage