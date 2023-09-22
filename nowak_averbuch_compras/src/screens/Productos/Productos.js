import {Link} from 'react-router-dom';
import Products from '../../components/Products/Products.js';
import "../Productos/Productos.css";

const Productos = ({products, listaCarrito}) => {    
    console.log("en Productos");
    
    return (
        //map lista productos como en el tp3 + buscador de productos
        <div>
            <h2 className='tituloProd'>Productos</h2>
        <Products className = 'titulo' products={products} listaCarrito={listaCarrito}></Products>
        
        </div>//<Link to='/DetalleProducto:id'>Detalle Producto</Link>
    );
}

export default Productos;