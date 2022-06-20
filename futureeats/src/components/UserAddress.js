import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProtectedPage from '../hooks/useProtectedPage';
import useRequestData from '../hooks/useRequestData';
import { goToEditAddress } from '../routes/coordinator';
import EditProfileIcon from "../img/EditProfileIcon.png"
import styled from 'styled-components';

const ProfileAddress = styled.div`
    img{
        margin-left: 250px;
    }
`

function UserAddress() {

    const navigate = useNavigate()
    useProtectedPage()

    const address = useRequestData({}, `/profile/address`)

    return (
        <ProfileAddress>
            {address.address ? <section>
                <div id={"address"}>
                    <p id={"title"}>Endereço cadastrado</p>
                    <p id={"address"}>{`${address.address.street},
                ${address.address.number}, 
                ${address.address.complement}, 
                ${address.address.neighbourhood},
                ${address.address.city}-${address.address.state}`}</p>
                </div>
                <img src={EditProfileIcon}
                    width={"30px"}
                    alt={"Caneta de editar"}
                    onClick={() => { goToEditAddress(navigate) }} />
            </section> : <p>Carregando...</p>}     
        </ProfileAddress>
    );
}

export default UserAddress;