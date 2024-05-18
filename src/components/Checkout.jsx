import React from "react";
import { useContext } from "react";
import { CartContext } from "../cartContext";
import Producto from "./Producto";

function Checkout() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Checkout
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-6">
            {cart.map((prod) => (
              <Producto key={prod.id} {...prod} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
