import React from "react";
import { CartContext } from "../cartContext";
import { useContext } from "react";

function CartWidget() {
  const { cantidad } = useContext(CartContext);

  return (
    <div>
      <i className="fa-solid fa-cart-shopping"></i>
      <span className="text-danger">
        <b>{cantidad}</b>
      </span>
    </div>
  );
}

export default CartWidget;
