import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import PersonalData from '../components/PersonalData';
import UserAddress from '../components/UserAddress';
import { goToLoginPage } from '../routes/coordinator';

function Profile () {
        const navigate = useNavigate()

        const logout = ()=> {
            localStorage.removeItem("token")
            goToLoginPage(navigate)
        }
        return (
            <div>
                <PersonalData/>
                <UserAddress/>
                <button
                    variant="contained" 
                    color="primary"
                    type={'submit'}
                    fullWidth
                    margin={'normal'}
                    onClick={()=>logout()}/>
                    Lo
                <Footer/>
                
            </div>
        );
    
}

export default Profile;