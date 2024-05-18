import React, { Component, useEffect } from "react";
import Productos from "./Productos";
import { useState } from "react";
import { getitems } from "../services/items";
import useProduct from "../hooks/useProduct";

const Home = () => {
  const productos = useProduct();

  return (
    <div>
      <Productos items={productos} />
    </div>
  );
};

export default Home;
