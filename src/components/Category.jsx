import React, { useMemo } from "react";
import Productos from "./Productos";
import useProduct from "../hooks/useProduct";
import { useParams } from "react-router-dom";

function Category() {
  const productos = useProduct();

  const { category } = useParams();

  const filter = useMemo(() => {
    return productos.filter((p) => p.category == category);
  }, [category, productos]);

  return (
    <div>
      <Productos items={filter} />
    </div>
  );
}

export default Category;
