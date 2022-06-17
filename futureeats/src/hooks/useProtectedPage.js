import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { goToLoginPage } from '../routes/coordinator'

const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token-labefood')
        if (!token) {
            goToLoginPage(navigate)
        }
    }, [navigate])
}

export default useProtectedPage