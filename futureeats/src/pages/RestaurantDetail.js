import React from 'react';
import Header from '../components/Header';

function RestaurantDetail () {

        const [restaurant,setRestaurant] = useState({})

        const navigate = useNavigate()
        const params = useParams()

        const getRestaurantDetail = () => {
            axios
            .get(`${BASE_URL}${params.id}`, {
                headers: {
                    auth:window.localStorage.getItem("token-labefood")
                }
            })
            .then((res)=> {
                setRestaurant(res.data[0])
            })
            .catch((error)=> {
                console.log(error)
            })
        }   
        
        useEffect(() => {
            getRestaurantDetail()
        }, [])
        console.log(restaurants.products.category)
        return (
            <div>
                 <Header />
                 <main>
                    <button onClick={()=> goBack(navigate)}>Voltar</button>
                    <section>
                        <article>
                            <img src = {restaurants.logoUrl} alt={restaurants.description} />
                            <h2>{restaurants.products.category}</h2>
                        </article>
                    </section>
                 </main>
            </div>
        );
    
}

export default RestaurantDetail;