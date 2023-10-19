import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import "../DetalleProducto/DetalleProducto.css";

const DetalleProducto = ({ products, carrito }) => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false);

    const selectedProduct = products.find(p => p.id === id);

    useEffect(() => {
    if (selectedProduct) {
        setProducto(selectedProduct);
    }
    }, [selectedProduct]);

    const carritoOnClickHandler = () => {
        setAgregadoAlCarrito(true);
        carrito(id);
    };

    const saveLocalStorage = () => {
      // Guardar solo el producto seleccionado en localStorage
        localStorage.setItem(id, JSON.stringify(selectedProduct));
    };
    return (
        <div className='containerDetalle'>
            <h2 className='tituloProd'>Producto</h2>
            <div >
                {products.map(p => (
                    <div key={p.id}>
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
                < p onClick={saveLocalStorage}><button className='buttonNormal' onClick={carritoOnClickHandler}>Agregar al carrito</button></p>
                {agregadoAlCarrito ? <p>Se agregó al carrito</p> : <p></p>}
            </div>
        </div>
    );
}

export default DetalleProducto;