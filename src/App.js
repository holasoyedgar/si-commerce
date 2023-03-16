import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import CartProvider from './context/CartProvider';
import Checkout from './components/Checkout';
import OrdersList from './components/OrdersList';
import Order from './components/Order';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar greeting="Hola mundo"/>
        <Container>
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
            <Route path="/product-not-found" element={<NotFound message="El producto no fue encontrado" />}/>
            <Route path="/order-not-found" element={<NotFound message="La orden no fue encontrada" />}/>
            <Route path="/cart" element={<Checkout />}/>
            <Route path="/orders" element={<OrdersList />}/>
            <Route path="/order/:orderId" element={<Order />}/>
            <Route path="*" element={<NotFound message="La ruta que intentó acceder no fue encontrada" />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
