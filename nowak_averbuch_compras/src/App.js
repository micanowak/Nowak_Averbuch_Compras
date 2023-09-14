import './App.css';
import Home from './screens/Home/Home';
import Contacto from './screens/Contacto';
import DetalleProducto from './screens/DetalleProducto';
import Productos from './screens/Productos/Productos';
import axios from 'axios';
import { /*Text,*/ useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './screens/Layout/Layout';
import Carrito from './screens/Carrito/Carrito';

function App() {

  const [listaProductos, setListaProductos] = useState([]);
  const [listaCarrito, setListaCarrito] = useState([]);

  const idCarrito = (id) => {
    setListaCarrito([...listaCarrito, id]);
    console.log(id);
    console.log(listaCarrito);
  }

  const deleteItem = (id) => {
    if(id != undefined){
      setListaCarrito(listaCarrito.filter(c => c != id));
    }
  }

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {

        //console.log(response.data.products);
        //response.data.products.forEach(element => {
          //setListaProductos(...listaProductos, element)
          //listaProductos.concat(element);
        //});
        setListaProductos(response.data.products);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/Home' index element={<Home products={listaProductos} />}></Route>
            <Route path='/Productos' element={<Productos products={listaProductos} listaCarrito={listaCarrito}/>}></Route>
            <Route path='/DetalleProducto/:id' element={<DetalleProducto products={listaProductos} carrito={idCarrito} />}></Route>
            <Route path='/Contacto' element={<Contacto />}></Route>
            <Route path='/Carrito' element={<Carrito listaCarrito={listaCarrito} listaProductos={listaProductos} sendDeleted={deleteItem} />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;