import { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import { BsFillCartFill } from 'react-icons/bs';
import { CartContext } from '../context/CartProvider';
import { calculateTotalQuantity } from '../util/utils';

const CartWidget = () => {
  const [items, setItems] = CartContext();
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const totalQuantityReduce = calculateTotalQuantity(items);
    setTotalQuantity(totalQuantityReduce);
  }, [items]);
  
  return (
    <div>
        <BsFillCartFill /> Carrito {' '}
        <Badge bg="dark">{totalQuantity}</Badge>
        
    </div>
  )
}

export default CartWidget