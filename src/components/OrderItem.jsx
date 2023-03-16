import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom";
import { currencyFormatter, dateFormatter, getOrderStatus } from "../util/utils";

const OrderItem = ({order}) => {
  return (
    <Card className="cart-item-card">
    <Container>
        <Row className="cart-item-row">
            <Col lg={3} md={6} sm={12}><Card.Subtitle>Número de orden:</Card.Subtitle> {order.id}</Col>
            <Col lg={3} md={6} sm={12}><Card.Subtitle>Fecha:</Card.Subtitle> {dateFormatter(order.date.toDate())}</Col>
            <Col lg={2} md={6} sm={12}><Card.Subtitle>Total:</Card.Subtitle> {currencyFormatter.format(order.total)}</Col>
            <Col lg={2} md={6} sm={12}><Card.Subtitle>Estatus:</Card.Subtitle> {getOrderStatus(order.status)}</Col>
            <Col lg={2} md={12} sm={12}><Link to={`/order/${order.id}`}>Ver orden</Link></Col>
        </Row>
    </Container>
</Card>
  )
}

export default OrderItem