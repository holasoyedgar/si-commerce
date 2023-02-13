import { Button } from "react-bootstrap";

const ItemCounter = (props) => {
  return (
    <div>
        <Button onClick={props.onDecreaseCounter}>-</Button>{' '}
        <label>{props.counter}</label> {' '}
        <Button onClick={props.onIncreaseCounter}>+</Button>
    </div>
  )
}

export default ItemCounter;