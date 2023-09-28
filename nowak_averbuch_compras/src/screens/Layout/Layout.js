import {Link, Outlet} from 'react-router-dom';
import '../Layout/Layout.css';
import { Button } from 'react-bootstrap';
//import logoSuper from '../../assets/logoSuper.png';
import logo from '../../assets/logo.png';
const Layout = () => {
    return (
        <>
            <nav className='navBar'>
                <img src={logo} alt='logo' className='logo'></img>
                <div className='divLinks'> 
                    <Link to='/Home' className='links'><Button  className='buttonLayout'>Home</Button></Link>
                    <br></br>
                    <Link to='/Productos' className='links'><Button className='buttonLayout'>All Products</Button></Link>
                    <br></br>
                    <Link to='/Contacto' className='links'><Button className='buttonLayout'>Contacto</Button></Link>
                    <br></br>
                    <Link to='/Carrito' className='links'><Button className='buttonLayout'>Carrito</Button></Link>
                </div>
            </nav>
        <Outlet></Outlet>
        </>
    );
}

export default Layout;