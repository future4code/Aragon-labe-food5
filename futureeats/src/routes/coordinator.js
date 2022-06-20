export const goToSignup = (navigate) => {
    navigate("/signup")
}

export const goToFeedPage = (navigate) => {
    navigate("/feedPage")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToDetailsPage = (navigate, restaurantId)=> {
    navigate(`/restaurants/${restaurantId}`)
}

export const goToRestaurant = (navigate) => {
    navigate("/restaurant")
}

export const goToSignupAddressPage = (navigate) => {
    navigate('/signup/address')
}

export const goToCartPage = (navigate) => {
    navigate("/cart")
}

export const goToProfile = (navigate) => {
    navigate("/profile")
}

export const goToEditProfile = (navigate) => {
    navigate("/editprofile")
}

export const goToEditAddress = (navigate)=> {
     navigate("/editaddress")
}