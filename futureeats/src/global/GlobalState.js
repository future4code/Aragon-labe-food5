import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/urls";
import  GlobalStateContext  from "./GlobalStateContext";


function GlobalState(props) {

    const [cart, setCart] = useState([])
    
    console.log(cart)
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

    const token = localStorage.getItem("token-labefood")

    const headers = {
        headers: {
            auth: token
        }
    }
       
    const addCart = (product)=> {
        setCart([...cart,product])
    }

    const addAddress = () => {
        axios.put(`${BASE_URL}/address`, address, headers)
            .then((res) => {
                localStorage.setItem("token-labefood", res.data.token)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

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
        getRestaurants: getRestaurants,
    }

    const states = {
        login: login,
        signUp: signUp,
        checker: checker,
        address: address,
        profile: profile,
        restaurants: restaurants,
        cart:cart
    };

    const setters = {
        setLogin: setLogin,
        setSignUp: setSignUp,
        setChecker: setChecker,
        setAddress: setAddress,
        setRestaurants: setRestaurants,
        addCart: addCart
    };

    const context = { states, setters, puts, getters};

    return (
        <GlobalStateContext.Provider value={context}>
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState;