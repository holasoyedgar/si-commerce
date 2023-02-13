import { useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { currencyFormatter } from "../util/utils"
import ItemCounter from "./ItemCounter";
import '../assets/styles/ItemDetail.css';

const ItemDetail = ({product}) => {
    const [counter, setCounter] = useState(1);
    const increaseCounter = () => {
        if (counter < product.stock) {
            setCounter(counter + 1);
        }
    }

    const decreaseCounter = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

  return (
    <Container>
    <Row>
      <Col xs={12} md={8}>
        <img src={product.image} alt={product.description} className='product-image'/>
      </Col>
      <Col>
        <Card>
            <Card.Body>  
                <h1>{product.title}</h1>
                <h3>{currencyFormatter.format(product.price)}</h3>
                <Card.Text>Descripción: {product.description}</Card.Text>
                <ItemCounter counter={counter} 
                onIncreaseCounter={increaseCounter}
                onDecreaseCounter={decreaseCounter}
                ></ItemCounter> <p>Hay {product.stock} disponibles</p>

                <Button>Agregar al carrito</Button>
            </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default ItemDetail