import {Link, Outlet} from 'react-router-dom';
import '../Layout/Layout.css';
//import logoSuper from '../../assets/logoSuper.png';
const Layout = () => {
    return (
        <>
            <nav className='navBar'>
                {/*<img src={logoSuper} alt='logo' className='logoSuper'></img>*/}
                <Link to='/Home' className='links'>Home</Link>
                <br></br>
                <Link to='/Productos' className='links'>All Products</Link>
                <br></br>
                <Link to='/Contacto' className='links'>Contacto</Link>
                <br></br>
                <Link to='/Carrito' className='links'>Carrito</Link>
            </nav>
        <Outlet></Outlet>
        </>
    );
}

export default Layout;