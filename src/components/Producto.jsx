import React from "react";
import Category from "./Category";
import { Link } from "react-router-dom";

function Producto({ name, url, id, category, quantity, isCheckout = false }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={"/images/" + url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Nombre: {name}</h5>
        <p className="card-text"><b>Categoria:</b>{category}</p>
        {quantity ? <p className="card-text"> <b>Cantidad:</b>{quantity}</p> : null}
        {isCheckout ? null : (
          <Link to={"/producto/" + id} className="btn btn-primary">
            Detalles
          </Link>
        )}
      </div>
    </div>
  );
}

export default Producto;
