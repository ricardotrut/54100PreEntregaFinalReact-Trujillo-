import React, { useMemo, useState } from "react";
import useProduct from "../hooks/useProduct";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../cartContext";

function ProductoDetalle() {
  const productos = useProduct();

  const [num, setNum] = useState(1);

  const { id } = useParams();

  const prod = useMemo(() => {
    return productos.find((p) => p.id == id);
  }, [id, productos]);

  const { addToCart, cantidad } = useContext(CartContext);

  const changenum = (e) => {
    setNum(e.target.value);
  };

  const addProduct = () => {
    for (let i = 0; i < num; i++) {
      console.log({ i, num });
      addToCart(prod);
    }
    setNum(1);
  };

  if (!prod) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={"/images/" + prod.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="card-text">
            <div>Nombre: {prod.name}</div>
            <div>Precio: ${prod.precio}</div>
            <input type="number" value={num} onChange={changenum} />
            <button onClick={addProduct}> Agregar Producto </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
