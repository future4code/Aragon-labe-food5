import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/urls";
import  GlobalStateContext  from "./GlobalStateContext";


function GlobalState(props) {

    const [login, setLogin] = useState({ email: "", password: "" });

    const [signUp, setSignUp] = useState({
        name: "",
        email: "",
        cpf:"",
        password: "",
    });
    const [profile, setProfile] = useState({})

    const [address, setAddress] = useState({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
    })
    const [checker, setChecker] = useState({ emailConfirm: "", passwordConfirm: "" })

    const [restaurants, setRestaurants] = useState([])

    const states = {
        login: login,
        signUp: signUp,
        checker: checker,
        address: address,
        profile: profile,
        restaurants: restaurants
    };

    const setters = {
        setLogin: setLogin,
        setSignUp: setSignUp,
        setChecker: setChecker,
        setAddress: setAddress,
        setRestaurants: setRestaurants
    };

    const token = localStorage.getItem("token-labefood")

    const headers = {
        headers: {
            auth: token
        }
    }

    const postLogin = () => {
        axios
            .post(`${BASE_URL}/login`, login)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem("token-labefood", res.data.token);
            })
            .catch((err) => {
                alert("Usuário ou senha inválidos");
                console.log(err.response.data.message);
            });
    };

    const postSignUp = () => {
        axios
            .post(`${BASE_URL}/signup`, signUp)
            .then((res) => {
                alert("Cadastro realizado com sucesso!")
                localStorage.setItem("token-labefood", res.data.token)
            })
            .catch((err) => {
                alert("Dados inválidos");
                console.log(err.response.data.message);
            });
    };

    const addAddress = () => {
        axios.put(`${BASE_URL}/address`, address, headers)
            .then((res) => {
                localStorage.setItem("token-labefood", res.data.token)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const posts = {
        postLogin: postLogin,
        postSignUp: postSignUp,
    };
    const puts = {
        addAddress: addAddress
    }

    const getProfile = () => {
        axios.get(`${BASE_URL}/profile`, headers)
            .then((res) => {
                setProfile(res.data)
                console.log(res.data.user.hasAddress)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const getRestaurants = () => {
        axios
            .get(`${BASE_URL}/restaurants`, headers)
            .then((res) => {
                setRestaurants(res.data?.restaurants)
                console.log(res.data.restaurants)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const getters = {
        getProfile: getProfile,
        getRestaurants: getRestaurants
    }

    const context = { states, setters, posts, puts, getters };

    return (
        <GlobalStateContext.Provider value={context}>
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState;
