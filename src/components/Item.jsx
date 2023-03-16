import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../assets/styles/Item.css';
import { CartContext } from "../context/CartProvider";
import { currencyFormatter } from '../util/utils';
import { createProductReference } from "../util/databaseUtils";

const Item = ({product}) => {
  const [items, setItems] = CartContext();

  const addItemToCart = (product) => {
    const productReference = createProductReference(product.id);
    let productFound = items.find((item) => item.product.id === productReference.id);
    if (productFound) {
      const newItems = items.map((item) => {
        if (item.product.id === productFound.product.id) {
          return {
            ...item,
            quantity: productFound['quantity'] + 1,
            total: productFound['currentPrice'] * (productFound['quantity'] + 1)
          };
        } else {
          return item;
        }
      });
      
      setItems(newItems);
    } else {
      const newProduct = {
        product: productReference,
        currentPrice: product.price,
        quantity: 1,
        total: product.price
      };

      setItems([...items, newProduct]);
    }
  };

  return (
    <Card>
        <Card.Img src={product.image} className="card-image"/>
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Subtitle>{currencyFormatter.format(product.price)}</Card.Subtitle>
        </Card.Body>
        <Card.Body>
          <Link to={`/item/${product.id}`}>
            <Button variant="danger">Ver detalle</Button>
          </Link>{' '}
          <Button onClick={() => addItemToCart(product)}>Agregar al carrito</Button>
        </Card.Body>
    </Card>
  )
}

export default Item;