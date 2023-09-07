import React from 'react';
import "../Products/Products.css";
import { Link } from 'react-router-dom';

const Products = ({products}) => {

    return (
        <div className='container'>
            <h2 className='tituloProd'>Productos</h2>
            <div className="containerProd">
                {products.map(p => (
                <div key={p.id} >

                    <img className = 'imgs' src={p.images[0]} alt={p.title}/>
                    <h3 className='nombreProd'>{p.title}</h3>
                    <Link to={'/DetalleProducto/' + p.id} >More Info</Link>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
/*products.map(p => 
    <p>Hola esto es un producto llamado {p.title}</p>
    
    )*/