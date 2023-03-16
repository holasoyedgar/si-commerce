import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getOrderFromFirebase } from "../util/databaseUtils";
import { dateFormatter } from "../util/utils";
import ReactLoading from 'react-loading';
import CartDetail from "./CartDetail";

const Order = () => {
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);
  const { orderId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
        const getProduct = async () => {
          setLoading(true);
          const orderFromFirebase = await getOrderFromFirebase(orderId);
          if (!orderFromFirebase.exists()) {
            navigate('/order-not-found');
          } else {
            setOrder(orderFromFirebase.data());
          }
          setLoading(false);
        }
        getProduct(); 
      }, [orderId]);

  return (
    loading ? 
    <ReactLoading type="bars" color="blue"/> :
    <>
        <h2>Su número de orden es: {orderId}</h2>
        <p>La fecha de compra fue: {dateFormatter(order.date.toDate())}</p>
        <CartDetail order={order}></CartDetail>
    </>
  )
}

export default Order