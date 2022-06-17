import React, {useContext } from 'react';
import GlobalStateContext from "../global/GlobalStateContext"
function CartPage() {

    const context = useContext(GlobalStateContext)

    const { states } = context

    return (
        <div>
            {states.cart.map((plate) => {
                return (
                    <article>
                       <img width={"50px"} src={plate.photoUrl} alt={`foto de ${plate.name}`} />
                        <h2>{plate.name}</h2>
                    </article>
                )
            })}
        </div>
    );

}

export default CartPage;