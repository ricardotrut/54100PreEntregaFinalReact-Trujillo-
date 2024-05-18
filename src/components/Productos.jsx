import React from "react";
import Producto from "./Producto";

function Productos({ items }) {
  return (
    <>
      {items.map((prod) => (
        <Producto key={prod.id} {...prod} />
      ))}
    </>
  );
}

export default Productos;