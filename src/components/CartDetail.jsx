import CartItem from "./CartItem";
import { currencyFormatter } from '../util/utils';
import "../assets/styles/CardDetail.css";

const CartDetail = (props) => {
  return (
    <div> {
            props.order.items.map(item => 
            <CartItem key={item.product.id} item={item}></CartItem>)
          }
          <h2 className="total-order">El total de la orden es {currencyFormatter.format(props.order.total)}</h2>
    </div>
  )
}

export default CartDetail