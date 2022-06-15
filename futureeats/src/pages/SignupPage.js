import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToSignupAddressPage } from "../routes/coordinator";
import Header from "../components/Header";
import GlobalStateContext from "../global/GlobalStateContext";
import { Button } from "@mui/material";
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
        <label htmlFor="name">Nome*</label>
        <input
          id="name"
          placeholder="Nome completo"
          name="name"
          value={signUp.name}
          onChange={onChangeSignUp}
          required
        />
        <br />
        <br />
        <label htmlFor="email">Email*</label>
        <input
          id="email"
          placeholder="Confirmar e-mail"
          name="email"
          type="email"
          value={signUp.email}
          onChange={onChangeSignUp}
          required
        />
		<br/>
		<label htmlFor="emailConfirm">Confirmação de Email*</label>
        <input
          id="emailConfirm"
          placeholder="email@email.com"
          name="emailConfirm"
          value={checker.emailConfirm}
          onChange={onChangeChecker}
          required
        />
        <br />

        <label htmlFor="cpf">CPF*</label>
        <input
        pattern=""
          id="cpf"
          placeholder="Somente números"
          name="cpf"
          type="number"
          value={signUp.cpf}
          onChange={onChangeSignUp}
          required
        />
        <br />
        
        <br />
        <label htmlFor="password">Senha*</label>
        <input
          id="password"
          placeholder="Inserir senha"
          type="password"
          name="password"
          value={signUp.password}
          onChange={onChangeSignUp}
          required
        />
		<br/>
		<label htmlFor="passwordConfirm">Confirmação de Senha*</label>
        <input
          id="passwordConfirm"
          placeholder="Confirmar senha"
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