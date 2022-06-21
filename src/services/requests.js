import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage, goToSignupAddressPage } from "../routes/coordinator"


export const requestSignup = (form, navigate) => {
  axios.post(`${BASE_URL}/signup`, form)
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
export const requestAddress = (form, navigate) => {
  console.log(form)
  axios
    .put(`${BASE_URL}/address`, form, {
      headers: {
        auth: localStorage.getItem("token-labefood")
      }
    })
    .then((res) => {
      alert("Endereço cadastrado com sucesso")
      window.localStorage.setItem("token-labefood", res.data.token)
      goToFeedPage(navigate)
    })
    .catch((error) => {
      console.log(error.data)
    })
}
export const requestLogin = (form, navigate) => {
  axios.post(`${BASE_URL}/login`, form)
    .then((res) => {
      alert("Logado")
      window.localStorage.setItem("token-labefood", res.data.token)
      goToFeedPage(navigate)
    })
    .catch((err) => {
      console.error("Erro ao se cadastrar")
      console.log(err)
    })
}
export const getRestaurantDetail = async (restaurantId) => {
  const header = {
    headers: {
      auth: (localStorage.getItem("labefood")).token,
    },
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/restaurants/${restaurantId}`,
      header
    );
    return response.data.restaurant;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data;
  }
};