import logo from '../assets/images/logo.png';
import { AiFillHome, AiFillBook } from 'react-icons/ai';
import { BsFillPersonFill, BsFillBookmarkFill, BsFillCartFill } from 'react-icons/bs';
import '../assets/styles/NavBar.css';

const NavBar = () => {
    return (
    <nav className='navbar navbar-expand navbar-dark bg-dark sticky-top'>
        <div className='container'>
            <img src={logo} alt="SI-Commerce logo" className='logo'></img>
            <div id="navbar">
                <ul className="navbar-nav ml-auto">
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>
                            <AiFillHome /> Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>
                            <AiFillBook /> Catálogo
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>
                            <BsFillPersonFill /> Mi Perfil
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>
                            <BsFillBookmarkFill /> Mis guardados
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>
                            <BsFillCartFill /> Carrito
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default NavBar;