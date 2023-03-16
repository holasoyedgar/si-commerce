import { useEffect } from "react";
import { useState } from "react";
import { getOrdersFromFirebase } from "../util/databaseUtils";
import OrderItem from "./OrderItem";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const getOrders = async () => {
    setLoading(true);
    const ordersFromFirebase = await getOrdersFromFirebase();
    setOrders(ordersFromFirebase);
    setLoading(false);
  }

  useEffect(() => {
    getOrders();
  }, []);
  
  return (
    <>
      {
        orders.length > 0 || loading ?
          <>
            <h1>Sus órdenes son: </h1>
            {
              orders.map(order => (
                  <OrderItem order={order} key={order.id}></OrderItem>
                )
              )
            }
          </> :
          <h1>No tiene órdenes</h1>
      }
    </>
  )
}

export default OrdersList