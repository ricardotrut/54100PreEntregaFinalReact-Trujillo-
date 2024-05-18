import React from "react";
import { useContext } from "react";
import { CartContext } from "../cartContext";
import Producto from "./Producto";
import Form from "./Form";
import { createOrder } from "../services/oders";

function Checkout() {
  const { cart, total, cantidad, clearCart } = useContext(CartContext);

  const handleSumit = ({ email, telefono, nombre }) => {
    createOrder({ email, telefono, nombre, cart }).then((orderNumber) => {
      alert(`Gracias por tu compra, Orden: #${orderNumber}`);
      clearCart();
    });
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Checkout- Total de la compra: ${total}
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-6">
            {cart.map((prod) => (
              <Producto key={prod.id} {...{ ...prod, isCheckout: true }} />
            ))}
          </div>
        </div>
      </div>
      {cantidad ? (
        <Form onSubmit={handleSumit} />
      ) : (
        <div>Favor de agregar articulos</div>
      )}
    </>
  );
}

export default Checkout;
