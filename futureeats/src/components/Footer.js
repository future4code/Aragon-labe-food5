const Footer = () => {
    const history = useHistory()

    return (
        <main>
            {history.location.pathname === "/restaurante" && <ActiveOrder />}
            <section>
                <img src={navigate.location.pathname === "/" ? homepageGreen : homepageWhite} alt={"Icone Página Inicial"} onClick={() => goToFeedPage(navigate)} />
                <img src={navigate.location.pathname === "/cart" ? shoppingCartGreen : shoppingCartWhite} alt={"Icone Carrinho"} onClick={() => goToCart(navigate)} />
                <img src={navigate.location.pathname === "/profile" ? avatarGreen : avatarWhite} alt={"Icone Perfil"} onClick={() => goToProfile(navigate)} />
            </section>
        </main>
    )
}

export default Footer