import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProtectedPage from '../hooks/useProtectedPage';
import useRequestData from '../hooks/useRequestData';
import { goToEditProfile } from '../routes/coordinator';
import EditProfile from "../img/EditProfile.png"

function UserAddress() {

    const navigate = useNavigate()
    useProtectedPage()

    const address = useRequestData({}, `/profile/address`)

    return (
        <div>
            {address.address ? <section>
                <div id={"address"}>
                    <p id={"title"}>Endereço cadastrado</p>
                    <p id={"address"}>{`${address.address.street},
                ${address.address.number}, 
                ${address.address.complement}, 
                ${address.address.neighbourhood},
                ${address.address.city}-${address.address.state}`}</p>
                </div>
                <img src={EditProfile}
                    alt={"Caneta de editar"}
                    onClick={() => { goToEditProfile(navigate) }} />
            </section> : <p>Carregando...</p>}     
        </div>
    );
}

export default UserAddress;