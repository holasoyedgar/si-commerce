import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { currencyFormatter } from "../util/utils";
import "../assets/styles/CartItem.css";
import { getProductFromFirebase } from "../util/databaseUtils";

const CartItem = ({item}) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const getProduct = async () => {
            const productFirebase = await getProductFromFirebase(item.product.id);
            setProduct(productFirebase.data());
        }

        getProduct();
    }, [item.product.id])
    
  return (
    <Card className="cart-item-card">
        <Container>
            <Row className="cart-item-row">
                <Col lg={3} md={6} sm={12}><Card.Img src={product.image} className="card-image"/></Col>
                <Col lg={3} md={3} sm={12}><Card.Title>{product.title}</Card.Title></Col>
                <Col lg={2} md={3} sm={12}><Card.Subtitle>Precio unitario:</Card.Subtitle> {currencyFormatter.format(item.currentPrice)}</Col>
                <Col lg={2} md={3} sm={12}><Card.Subtitle>Cantidad:</Card.Subtitle> {item.quantity}</Col>
                <Col lg={2} md={3} sm={12}><Card.Subtitle>Precio final:</Card.Subtitle> {currencyFormatter.format(item.total)}</Col>
            </Row>
        </Container>
    </Card>
  )
}

export default CartItem