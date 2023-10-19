import React, { useState } from 'react';
import "../Products/Products.css";
import { Link } from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';

const Products = ({ products, listaCarrito }) => {
    //const [check, setCheck] = useState(false);

    return (
        <div className='container'>
            
            <div className="containerProd">
                { products ? (
                    
                        products.map(p => (
                            <div className = 'cadaUna' key={p.id}>
                                <img className='imgs' src={p.images[0]} alt={p.title} />
                                {listaCarrito && listaCarrito.some(prod => prod == p.id) ? <p>Ya está en el carrito!</p> : null}
                                <h3 className='nombreProd'>{p.title}</h3>
                                <Link to={'/DetalleProducto/' + p.id}><button className='buttonMore'>More Info</button></Link>

                            </div>
                        ))
                    )
                    : 
                    (
                    <p>Loading... </p>
                )}
            </div>
        </div>
    );
};

export default Products;
