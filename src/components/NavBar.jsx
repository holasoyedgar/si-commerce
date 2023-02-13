import logo from '../assets/images/logo.png';
import { AiFillHome, AiFillBook } from 'react-icons/ai';
import { BsFillPersonFill, BsFillBookmarkFill, BsFillCartFill } from 'react-icons/bs';
import '../assets/styles/NavBar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
    <Navbar expand="lg" bg="primary">
        <Container>
            <Navbar.Brand>
                <img src={logo} alt="SI-Commerce logo" className='logo'></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link> <AiFillHome />Home</Nav.Link>
            <Nav.Link><AiFillBook /> Catálogo</Nav.Link>
            <Nav.Link><BsFillPersonFill /> Mi Perfil</Nav.Link>
            <Nav.Link><BsFillBookmarkFill /> Mis guardados</Nav.Link>
            <Nav.Link><BsFillCartFill /> Carrito</Nav.Link>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;