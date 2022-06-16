const Footer = () => {
    const navigate = useNavigate()

    return (
        <main>
            {navigate.location.pathname === "/restaurante" && <ActiveOrder />}
            <section>
                <button onClick={() => goToFeedPage(navigate)}>Pagina principal</button>
                <button onClick={() => goToCart(navigate)}>Carrinho</button>
                <button onClick={() => goToProfile(navigate)} >Perfil</button>
            </section>
        </main>
    )
}

export default Footer