import React, {useContext } from 'react';
import Footer from '../components/Footer';
import GlobalStateContext from "../global/GlobalStateContext"

function CartPage() {

    const context = useContext(GlobalStateContext)

    const { states } = context

    return (
        <div>
            {states.cart.map((plate) => {
                return (
                    <article>
                       <img width={"400px"} src={plate.photoUrl} alt={`foto de ${plate.name}`} />
                        <h2>{plate.name}</h2>
                    </article>
                )
            })}
            <Footer/>
        </div>
    );

}

export default CartPage;