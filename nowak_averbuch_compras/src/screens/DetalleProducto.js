import {useState} from 'react';
import { useParams } from 'react-router-dom'

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
        <div className='container'>
            <h2 className='tituloProd'>Producto</h2>
            <div className="containerProd">
                {products.map(p => (
                    p.id == id ? <p>{p.title}</p> : <p></p>
                ))}
                <p onClick={carritoOnClickHandler}>Agregar al carrito</p>
                {agregadoAlCarrito ? <p>Se agregó al carrito</p> : <p></p>}
            </div>
        </div>
    );
}

export default DetalleProducto;