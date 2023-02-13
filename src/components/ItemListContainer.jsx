import allProducts from "../assets/database/db";
import Item from "./Item";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const ItemListContainer = () => {
    const { categoryId } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            if (!categoryId) {
                setProducts(allProducts);
            } else {
                const filteredProducts = allProducts.filter(product => product.category === parseInt(categoryId));
                setProducts(filteredProducts);
            }
        }, [categoryId]);
        
    return (
        <Container>
            <Row xs={1} md={2} lg={4}>
                {
                    products.map(product => (
                        <Col key={product.id}>
                            <Item product={product}></Item>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default ItemListContainer;