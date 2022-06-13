import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToSignupAddressPage } from "../routes/coordinator"


export const requestCadastro = (form,navigate) => {
    axios.post (`${BASE_URL}/signup`, form)
        .then((res) => {
            alert("Cadastrado com sucesso")
        
            window.localStorage.setItem("token-labefood", res.data.token)
            goToSignupAddressPage(navigate)
        })
        .catch((err) => {
                       console.error("Erro ao se cadastrar")
                       console.log(err)
                })
    }
