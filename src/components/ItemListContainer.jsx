import Item from "./Item";
import { Row, Col } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getProductsFromFirebase } from '../util/databaseUtils';
import ReactLoading from 'react-loading';

const ItemListContainer = () => {
    const { categoryId } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(
        () => {
            const getProducts = async () => {
                setLoading(true);
                const productDocs = await getProductsFromFirebase();
                setLoading(false);
                if (!categoryId) {
                    setProducts(productDocs);
                } else {
                    const filteredProducts = productDocs.filter(product => product.category === parseInt(categoryId));
                    setProducts(filteredProducts);
                }
            }

            getProducts();
        }, [categoryId]);
        
    return (
        loading ?
        <ReactLoading type="bars" color="blue"/> :
        <>
            <Row xs={1} md={2} lg={4}>
                {
                    products.map(product => (
                        <Col key={product.id}>
                            <Item product={product}></Item>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default ItemListContainer;