import { Button, Form, FormGroup } from "react-bootstrap"

const UserForm = (props) => {

  return (
    <div>
        <form onSubmit={props.onSubmit}>
          <FormGroup>
            <label htmlFor="">Nombre(s)</label>
            <Form.Control
              onChange={props.onChange}
              type="text"
              name="firstName"
              value={props.purchaser.firstName}
            ></Form.Control>

            <label htmlFor="">Apellidos</label>
            <Form.Control
              onChange={props.onChange}
              type="text"
              name="lastName"
              value={props.purchaser.lastName}
            ></Form.Control>

            <label htmlFor="">Teléfono</label>
            <Form.Control
              onChange={props.onChange}
              type="text"
              name="phoneNumber"
              value={props.purchaser.phoneNumber}
            ></Form.Control>

            <label htmlFor="">Email</label>
            <Form.Control
              onChange={props.onChange}
              type="email"
              name="email"
              value={props.purchaser.email}
            ></Form.Control>

            <label htmlFor="">Repetir email</label>
            <Form.Control
              onChange={props.onConfirmedEmailChange}
              type="email"
              value={props.confirmedEmail}
            ></Form.Control>
          </FormGroup>
          <Button type="submit" disabled={props.disablePurchaseButton}>
            Comprar
          </Button>
        </form>
      </div>
  )
}

export default UserForm