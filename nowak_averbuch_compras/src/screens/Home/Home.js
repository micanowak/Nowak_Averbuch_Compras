//import { Link } from 'react-router-dom';
//import { Text } from 'react';
import Products from '../../components/Products/Products.js';
import Carousel from '../../components/Carousel/Carousel.js';
import { useEffect, useState } from 'react';
import "../Home/Home.css";

const Home = ({products}) => {
    const [nuevaLista, setNuevaLista] = useState([]);
    console.log("en Home");
    useEffect(() => {
        if (products) {
            const productsCinco = products.slice(0, 5);
            setNuevaLista(productsCinco);
        }
        
        
    }, [products])
    //<h2>Home</h2>
    return (
        //mostar products + carousel
        <div className="container">
            <Carousel />
            {nuevaLista && nuevaLista.length > 0 ? (
            <Products className="titulo" products={nuevaLista} />
            ) : (
            <p>Loading...</p>
      )}
    </div>
    );
}

export default Home;