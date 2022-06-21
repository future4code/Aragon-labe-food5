import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Grow, Container } from '@mui/material'
import { goToLoginPage } from '../routes/coordinator';
import logo from "../img/logo.png"


function ScreenPage() {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            goToLoginPage(navigate);
        }, 3000);
    }, [navigate])

    return (
        <>
            <Container
                style={{
                    height: '100vh',
                    padding: 0,
                    backgroundColor: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                maxWidth='md'
            >
                <Grow in={true} timeout={1500}>
                    <img src={logo} alt="FutureEats" />
                </Grow>
            </Container>
        </>
    );

}

export default ScreenPage;