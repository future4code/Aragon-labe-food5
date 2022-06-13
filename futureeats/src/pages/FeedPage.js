import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/urls';
import useProtectedPage from '../hooks/useProtectedPage';

// const FeedPage = () => {
//     useProtectedPage()
// }

    // const [restaurantes, setRestaurantes] = useState([])
    // const [todosRestaurantes, setTodosRestaurantes] = useState([])
    // const [flagRestaurantes, setFlagRestaurantes] = useState(false)
    // const [burguerFilter, setBurguerFilter] = useState(false)
    // const [asiaticaFilter, setAsiaticaFilter] = useState(false)
    // const [massaFilter, setMassaFilter] = useState(false)
    // const [saudaveisFilter, setSaudaveisFilter] = useState(false)
    // const [arabeFilter, setArabeFilter] = useState(false)
    // const [sorvetesFilter, setSorvetesFilter] = useState(false)
    // const [carnesFilter, setCarnesFilter] = useState(false)
    // const [baianaFilter, setBaianaFilter] = useState(false)
    // const [petiscosFilter, setPetiscosFilter] = useState(false)
    // const [mexicanaFilter, setMexicanaFilter] = useState(false)
    // const [form, onChange, clear] = useForm({name:''})
    // const [isLoading, setIsLoading] = useState(false)

    // useEffect(()=> {
    //     const headers = {
    //         headers: {
    //             authorization: window.localStorage.getItem("token"),
    //             "content-type": "application/json"
    //         }
    //     }
    //     setIsLoading(true)

    //     axios.get(`${BASE_URL}/restaurants`, headers)
    //     .then(()=> {
    //         setRestaurantes(response.data.restaurants)
    //         setTodosRestaurantes(response.data.restaurants)
    //         setIsLoading(false)
    //     })
    //     .catch((error)=> {
    //         console.log(error.data)
    //     })
    // },[flagRestaurantes])

    // const filtroBotoes = (filtro,desliga)=> {
    //     if (filtro==="burguer") {
    //         setBurguerFilter(!burguerFilter)
    //         setAsiaticaFilter(false)
    //         setMassaFilter(false)
    //         setArabeFilter(false)
    //         setSorvetesFilter(false)
    //         setCarnesFilter(false)
    //         setBaianaFilter(false)
    //         setPetiscosFilter(false)
    //         setMexicanaFilter(false)
    //     }
    //     const listaFiltrada = todosRestaurantes && todosRestaurantes.filter((restaurante)= > {
            
    //     })
    // }

function FeedPage () {
    
        return (
            <div>
                FeedPage
            </div>
        );
    
}

export default FeedPage;