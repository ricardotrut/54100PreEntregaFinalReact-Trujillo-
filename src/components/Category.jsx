import React, { useMemo } from "react";
import Productos from "./Productos";
import productos from "../productos";
import { useParams } from "react-router-dom";

function Category() {
    
  const { category } = useParams();

  const filter = useMemo(() => {
    return productos.filter((p)=> p.category== category);
  }, [category]);

  return (
    <div>
      <Productos items={filter} />
    </div>
  );
}

export default Category;
