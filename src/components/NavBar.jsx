import logo from '../assets/images/logo.png';
import { AiFillHome } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import '../assets/styles/NavBar.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ({ greeting }) => {
    const categories = [{
        categoryId: 1,
        name: "Smartphones"
    }, {
        categoryId: 2,
        name: "Laptops"
    }, {
        categoryId: 3,
        name: "Fragancias"
    }, {
        categoryId: 4,
        name: "Cuidado de la piel"
    }, {
        categoryId: 5,
        name: "Comestibles"
    }, {
        categoryId: 6,
        name: "Decoración del hogar"
    }];

    return (
    <Navbar expand="lg" bg="primary">
        <Container>
            <Navbar.Brand>
                <NavLink to="/">
                    <img src={logo} alt="SI-Commerce logo" className='logo'></img>
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link to='/' as={NavLink}>
                        <AiFillHome />Home
                    </Nav.Link>
                    <NavDropdown title="Categorias">
                        {
                            categories.map(category => (
                                <NavDropdown.Item 
                                key={category.categoryId} to={`/category/${category.categoryId}`} 
                                as={NavLink}>                  
                                    {category.name}
                                </NavDropdown.Item>
                            ))
                        }
                    </NavDropdown>
                    <Nav.Link as={NavLink} to='/orders'><BsFillCheckCircleFill /> Mis compras</Nav.Link>
                    <Nav.Link as={NavLink} to='/cart'><CartWidget /></Nav.Link>
                    <Nav.Link as={NavLink}>{ greeting }</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;