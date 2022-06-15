export const goToSignup = (navigate) => {
    navigate("/signup")
}

export const goToFeedPage = (navigate) => {
    navigate("/feedPage")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToDetailsPage = (navigate, postId)=> {
    navigate(`/post/${postId}`)
}

export const goToRestaurant = (navigate) => {
    navigate("/restaurant")
}

export const goToSignupAddressPage = (navigate) => {
    navigate('/signup/address')
}

export const goBack = (navigate) => {
    navigate(-1)
}