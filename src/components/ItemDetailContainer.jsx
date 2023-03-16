import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsFromFirebase } from "../util/databaseUtils";
import ReactLoading from 'react-loading';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const products = await getProductsFromFirebase();
      const productFound = products.find(product => product.id === itemId);
      setLoading(false);
      if (!productFound) {
        navigate('/product-not-found')
      } else {
        setProduct(productFound);
      }
    }
    getProduct(); 
  }, [itemId]);

  return (
      loading ? 
      <ReactLoading type="bars" color="blue"/> :
      <ItemDetail product={product} />
  )
}

export default ItemDetailContainer;