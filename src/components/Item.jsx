import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../assets/styles/Item.css';
import { currencyFormatter } from '../util/utils';

const Item = ({product}) => {
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
          <Button>Agregar al carrito</Button>
        </Card.Body>
    </Card>
  )
}

export default Item;