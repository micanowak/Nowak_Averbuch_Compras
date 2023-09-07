import {Text, useState} from 'react';
import { useParams } from 'react-router-dom'

const DetalleProducto = ({products}) => {
    const id = useParams();
    const [producto, setProducto] = useState([]);
    
    /*for (let index = 0; index < products.length; index++) {
        if(products[index].id === id){
            setProducto(products[index]);
        }     
    }*/
    return (
        <div className='container'>
            <h2 className='tituloProd'>Productos</h2>
            <div className="containerProd">
                {products.map(p => (
                    p.id === id ? setProducto(p) : <p></p>
                ))}
            </div>
            <Text>{producto.title}</Text>
        </div>
    );
}

export default DetalleProducto;