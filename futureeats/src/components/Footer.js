import homepage from "../img/homepage.png"
import shoppingCart from "../img/shoppingCart.png"
import avatar from "../img/avatar.png"
import { useNavigate } from "react-router-dom"
import { goToCartPage, goToFeedPage, goToProfile } from "../routes/coordinator"


const Footer = () => {

    const navigate = useNavigate()

    return (
        <main>
            <section>
                <button><img src={homepage} onClick={() => goToFeedPage(navigate)}/></button>
                <button><img src={shoppingCart} onClick={() => goToCartPage(navigate)}/></button>
                <button><img src={avatar} onClick={() => goToProfile(navigate)}/></button>
            </section>
        </main>
    )
}

export default Footer