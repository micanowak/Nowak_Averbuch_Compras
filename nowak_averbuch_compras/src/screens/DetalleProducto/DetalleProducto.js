import { Button } from 'bootstrap';
import {useState} from 'react';
import { useParams } from 'react-router-dom'
import "../DetalleProducto/DetalleProducto.css";

const DetalleProducto = ({products, carrito}) => {
    const { id } = useParams();
    const [producto, setProducto] = useState([]);
    const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false);
    
    /*for (let index = 0; index < products.length; index++) {
        if(products[index].id === id){
            setProducto(products[index]);
        }     
    }*/

    const carritoOnClickHandler = () => {
        setAgregadoAlCarrito(true);
        carrito(id);
    }

    return (
        <div className='containerDetalle'>
            <h2 className='tituloProd'>Producto</h2>
            <div >
                {products.map(p => (
                    <div>
                        {p.id == id ? 
                        (
                        <div>
                            <p>{p.title}</p> 
                            <img className='imgs' src={p.images[0]} alt={p.title} ></img>
                        </div>
                        ) 
                        : 
                        (
                        <p></p>
                        )}
                    
                    </div>
                ))}
                <p onClick={carritoOnClickHandler}><button className='buttonNormal'>Agregar al carrito</button></p>
                {agregadoAlCarrito ? <p>Se agregó al carrito</p> : <p></p>}
            </div>
        </div>
    );
}

export default DetalleProducto;