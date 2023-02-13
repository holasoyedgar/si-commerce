import logo from '../assets/images/logo.png';
import { AiFillHome } from 'react-icons/ai';
import { BsFillBookmarkFill, BsFillCartFill } from 'react-icons/bs';
import '../assets/styles/NavBar.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                <Link to="/">
                    <img src={logo} alt="SI-Commerce logo" className='logo'></img>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link to='/' as={Link}>
                        <AiFillHome />Home
                    </Nav.Link>
                    <NavDropdown title="Categorias">
                        {
                            categories.map(category => (
                                <NavDropdown.Item 
                                key={category.categoryId} to={`/category/${category.categoryId}`} 
                                as={Link}>                  
                                    {category.name}
                                </NavDropdown.Item>
                            ))
                        }
                    </NavDropdown>
                    <Nav.Link as={Link}><BsFillBookmarkFill /> Mis guardados</Nav.Link>
                    <Nav.Link as={Link}><BsFillCartFill /> Carrito</Nav.Link>
                    <Nav.Link as={Link}>{ greeting }</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;