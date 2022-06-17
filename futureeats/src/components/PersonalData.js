import React from 'react'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../hooks/useProtectedPage'
import useRequestData from '../hooks/useRequestData'
import { goToEditProfile } from '../routes/coordinator'
import logoLogin from "../img/logoLogin.png"
const PersonalData = () => {

    useProtectedPage()

    const navigate = useNavigate()

    const dataProfile = useRequestData([], "/profile")
    console.log(dataProfile)
    return (
        <section>
            {dataProfile.user ? <div>
                <div id={"personalData"}>
                    <div>
                        <p id={"name"}>{dataProfile.user.name}</p>
                        <p id={"email"}>{dataProfile.user.email}</p>
                        <p id={"cpf"}>{dataProfile.user.cpf}</p>
                    </div>
                    <img src={logoLogin} 
                    alt={"Caneta de editar"} 
                    onClick={() => goToEditProfile(navigate)} />
                </div>
            </div> : <p> Carregando...</p>}
        </section>
    )
}

export default PersonalData

