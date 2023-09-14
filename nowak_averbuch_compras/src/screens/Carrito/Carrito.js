import { useEffect, useState } from 'react';
import "../Carrito/Carrito.css";
import { useParams } from 'react-router-dom'



const Carrito = ({listaCarrito, listaProductos}) => {

    return (
        <div className='container'>
            <h2 className='tituloProd'>Producto</h2>
            <div className="containerProd">
            {listaCarrito.map(c => (
                    listaProductos.map(p => (
                        p.id == c ? <p>{p.title}</p> : <p></p>
                    ))
                ))}
            </div>
        </div>
    );
}

export default Carrito;