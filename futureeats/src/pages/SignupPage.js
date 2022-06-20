import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import { Button, TextField } from "@mui/material";
import { requestSignup } from "../services/requests";
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

function SignupPage() {

  const navigate = useNavigate();

  const context = useContext(GlobalStateContext);

  const { signUp, checker } = context.states;

  const { setSignUp, setChecker } = context.setters;

  const onChangeSignUp = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const onChangeChecker = (e) => {
    setChecker({ ...checker, [e.target.name]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();

    const form = {
      name: signUp.name,
      email: signUp.email,
      cpf: signUp.cpf,
      password: signUp.password
    }
    requestSignup(form, navigate)
  };

  return (
    <Screencontainer>
      <LogoImage src={logoLogin} alt={"Imagem da logo"} />
      <InputsContainer onSubmit={register}>
        <label htmlFor="name"></label>
        <TextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          name="name"
          value={signUp.name}
          onChange={onChangeSignUp}
          required
          fullWidth
        />

        <label htmlFor="cpf"></label>
        <TextField
          id="outlined-basic"
          label="CPF"
          variant="outlined"
          pattern=""
          name="cpf"
          type="number"
          value={signUp.cpf}
          onChange={onChangeSignUp}
          required
          fullWidth
        />

        <label htmlFor="email"></label>
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          name="email"
          type="email"
          value={signUp.email}
          onChange={onChangeSignUp}
          required
          fullWidth
        />

        <label htmlFor="emailConfirm"></label>
        <TextField
          id="outlined-basic"
          label="Confirme o e-mail"
          variant="outlined"
          name="emailConfirm"
          value={checker.emailConfirm}
          onChange={onChangeChecker}
          required
          fullWidth
        />

        <label htmlFor="password"></label>
        <TextField
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          type="password"
          name="password"
          value={signUp.password}
          onChange={onChangeSignUp}
          required
          fullWidth
        />

        <label htmlFor="passwordConfirm"></label>
        <TextField
          id="outlined-basic"
          label="Confirme a Senha"
          variant="outlined"
          type="password"
          name="passwordConfirm"
          value={checker.passwordConfirm}
          onChange={onChangeChecker}
          required
          fullWidth
        />
        <Button variant="contained" fullWidth type="submit">Cadastrar</Button>
      </InputsContainer>
    </Screencontainer>
  );
}

export default SignupPage