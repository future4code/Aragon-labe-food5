


function CardHome (props) {
    const navigate = useNavigate()
    return(
        <main>
            <button onClick={() => goToRestaurant(navigate, props.restaurante.id)}>
                <img src={props.restaurante.logoUrl} />
                <section>
                    <section>{props.restaurante.name}</section>
                    <section>
                        <section>{props.restaurante.deliveryTime} min</section>
                        <section>Frete R${props.restaurante.shipping},00</section>
                    </section>
                </section>
            </button>
        </main>
    )
}

export default CardHome