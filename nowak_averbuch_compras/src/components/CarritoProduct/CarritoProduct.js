import React, { useState } from 'react';
import "../Products/Products.css";
import { Link } from 'react-router-dom';
import "../CarritoProduct/CarritoProduct.css";

const CarritoProduct = ({producto, deleteItem}) => {

    const deleteOnClickHandler = () => {
        deleteItem(producto.id);
    }

    return (
        <div className=''>
            <div className="">
                    <img className = 'imgCarrito' src={producto.images} alt={producto.title}/>
                    <h3 className='nombreProd'>{producto.title}</h3>
                    {/*<Link to={'/DetalleProducto/' + producto.id} >More Info</Link>*/}
                  
                    <button onClick={deleteOnClickHandler}>Delete Item</button>  <br></br>
                    <br></br>
                    <br></br>
            </div>
        </div>
    );
};

export default CarritoProduct;
