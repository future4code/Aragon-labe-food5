import homepage from "../img/homepage.png"
import shoppingCart from "../img/shoppingCart.png"
import avatar from "../img/avatar.png"
import { useNavigate } from "react-router-dom"
import { goToCartPage, goToFeedPage, goToProfile } from "../routes/coordinator"
import styled from "styled-components";

const ContainerFooterIcon = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    height: 6vh;
    margin-left: 34%;
    width: 32%;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-top: 2px solid #999;

    button{
        border-style: solid;
        border-color: white;
    }
`

const Footer = () => {

    const navigate = useNavigate()

    return (
        <main>
            <ContainerFooterIcon>
                <button>
                    <img src={homepage} onClick={() => goToFeedPage(navigate)}/>
                </button>
                <button>
                    <img src={shoppingCart} onClick={() => goToCartPage(navigate)}/>
                </button>
                <button>
                    <img src={avatar} onClick={() => goToProfile(navigate)}/>
                </button>
            </ContainerFooterIcon>
        </main>
    )
}

export default Footer