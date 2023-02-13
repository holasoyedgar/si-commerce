import ItemDetail from "./ItemDetail";
import allProducts from "../assets/database/db";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const productFound = allProducts.find(product => product.id === parseInt(itemId));
    setProduct(productFound);
  }, [itemId]);
  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer;