import React, { useState } from 'react';
import "../Products/Products.css";
import { Link } from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';

const Products = ({ products, listaCarrito }) => {
    const [check, setCheck] = useState(false);

    return (
        <div className='container'>
            
            <div className="containerProd">
                {/*listaCarrito &&*/ products ? (
                    /*listaCarrito.map(c => (*/
                        products.map(p => (
                            <div className = 'cadaUna' key={p.id}>
                                <img className='imgs' src={p.images[0]} alt={p.title} />
                                {listaCarrito.includes(p.id) ? <p>check</p> : null}
                                <h3 className='nombreProd'>{p.title}</h3>
                                <Link to={'/DetalleProducto/' + p.id}><button className='buttonMore'>More Info</button></Link>
                                {/*{p.id === c ? setCheck(true) : <p></p>}
                                <img className='imgs' src={p.images[0]} alt={p.title} />
                                {check ? <p>check</p> : <p></p>}
                                <h3 className='nombreProd'>{p.title}</h3>
                                <Link to={'/DetalleProducto/' + p.id}>More Info</Link>*/}
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
