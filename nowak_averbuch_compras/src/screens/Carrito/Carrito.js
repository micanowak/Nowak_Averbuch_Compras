//import { useEffect, useState } from 'react';
import "../Carrito/Carrito.css";
//import { useParams } from 'react-router-dom'
import CarritoProduct from '../../components/CarritoProduct/CarritoProduct';



const Carrito = ({listaCarrito, listaProductos, sendDeleted}) => {

    const deleteItemHandler = (id) => {
        if(id != undefined){
            sendDeleted(id);
        }
    }
    

    return (
        <div className='container'>
            <h2 className='tituloProd'>Carrito</h2>
            <div className="containerCarrito" >
            {listaCarrito.map(c => (
                    listaProductos.map(p => (
                        p.id == c ? <CarritoProduct producto={p} deleteItem={deleteItemHandler} /> : <p></p>
                    ))
                ))}
            </div>
        </div>
    );
}

export default Carrito;