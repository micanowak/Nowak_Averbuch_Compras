import React, { useState } from 'react';
import "../Products/Products.css";
import { Link } from 'react-router-dom';

const CarritoProduct = ({producto, deleteItem}) => {

    const deleteOnClickHandler = () => {
        deleteItem(producto.id);
    }

    return (
        <div className='container'>
            <div className="containerProd">
                    <img className = 'imgs' src={producto.images} alt={producto.title}/>
                    <h3 className='nombreProd'>{producto.title}</h3>
                    <Link to={'/DetalleProducto/' + producto.id} >More Info</Link>
                    <br></br>
                    <button onClick={deleteOnClickHandler}>Delete Item</button>
            </div>
        </div>
    );
};

export default CarritoProduct;
