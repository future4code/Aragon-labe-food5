import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import PersonalData from '../components/PersonalData';
import UserAddress from '../components/UserAddress';
import { goToLoginPage } from '../routes/coordinator';
import { Button } from '@mui/material';
import styled from "styled-components";

const Screencontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 12vh;
`
const ContainerProfile = styled.form`
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

    p{
        color: #b8b8b8;
    }
`

function Profile () {
        const navigate = useNavigate()

        const logout = ()=> {
            localStorage.removeItem("token")
            goToLoginPage(navigate)
        }
        return (
            <Screencontainer>
                <ContainerProfile>
                    <PersonalData />
                    <UserAddress />
                    <p>Histórico de pedidos</p>
                    <Button variant="contained" fullWidth onClick={logout} >Sair</Button>
                    <Footer />
                </ContainerProfile>
            </Screencontainer>
        );
    
}

export default Profile;