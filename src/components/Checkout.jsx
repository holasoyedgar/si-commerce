import dayjs from "dayjs";
import { useState } from "react";
import { CartContext } from "../context/CartProvider";
import { calculateTotalOrder } from "../util/utils";
import CartDetail from "./CartDetail";
import UserForm from "./UserForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { saveOrder } from "../util/databaseUtils";

const Checkout = () => {
    const [items, setItems] = CartContext();
    const [order, setOrder] = useState({
      date: dayjs().toDate(),
      items: items,
      purchaser: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: ''
      },
      status: 'generated',
      total: calculateTotalOrder(items)
    });

    const [orderId, setOrderId] = useState(null);

    const [errors, setErrors] = useState([]);

    const [confirmedEmail, setConfirmedEmail] = useState('');

    const [disablePurchaseButton, setDisablePurchaseButton] = useState(true);

    const navigate = useNavigate();

    const handleChange = (e) => {
      setOrder({
        ...order,
        purchaser: {
          ...order.purchaser,
          [e.target.name]: e.target.value
        }
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const orderDocument = await saveOrder(order);
        setOrderId(orderDocument.id);

        setErrors([]);

        setItems([]);

        setTimeout(() => navigate('/'), 3000);
      } catch (error) {
        setErrors([error.message]);
      }
    };

    const handleConfirmedEmailChanged = (e) => {
      setConfirmedEmail(e.target.value);
    }

    useEffect(() => {
      const { firstName,
              lastName,
              phoneNumber,
              email } = order.purchaser;

      const getErrors = () => {
        setDisablePurchaseButton(true);
        setErrors(errors => errors.filter(error => error !== "El nombre es obligatorio"));
        if (!firstName) {
          setErrors(errors => [...errors, "El nombre es obligatorio"]); 
        }
  
        setErrors(errors => errors.filter(error => error !== "El apellido es obligatorio"));
        if (!lastName) {
          setErrors(errors => [...errors, "El apellido es obligatorio"]);
        }
  
        setErrors(errors => errors.filter(error => error !== "El teléfono es obligatorio"));
        if (!phoneNumber) {
          setErrors(errors => [...errors, "El teléfono es obligatorio"]);
        }

        setErrors(errors => errors.filter(error => error !== "El email es obligatorio"));  
        if (!email) {
          setErrors(errors => [...errors, "El email es obligatorio"]);
        }

        setErrors(errors => errors.filter(error => error !== "Los emails deben coincidir"));  
        if (!email || !confirmedEmail || email !== confirmedEmail) {
          setErrors(errors => [...errors, "Los emails deben coincidir"]);
        }
  
        if (errors.length === 0) {
          setDisablePurchaseButton(false);
        }
      }

      getErrors();     
    },
    [order, confirmedEmail, errors.length]);

  return (
    <>
        {
          order.items.length ? 
            <>
              <CartDetail order={order}></CartDetail>
              {
                orderId &&
                <h2>Gracias por comprar, su número de orden es: {orderId}</h2>
              }
              <UserForm 
              purchaser={order.purchaser}
              onChange={handleChange}
              onSubmit={handleSubmit}
              disablePurchaseButton={disablePurchaseButton}
              confirmedEmail={confirmedEmail}
              onConfirmedEmailChange={handleConfirmedEmailChanged}
              ></UserForm>
              {
                errors && (
                <ul>
                  {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
              )} 
            </> :
            <h1>No hay elementos en el carrito</h1>
          }
    </>
  )
}

export default Checkout