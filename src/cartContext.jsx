import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newProduct) => {
    setCart((c) => {
      return [...c, newProduct];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const cantidad = cart.reduce((acc, p) => {
    return acc + (+p.quantity || 1);
  }, 0);

  const total = cart.reduce((acc, p) => {
    const quantity = +p.quantity;
    const precio = +p.precio;
    return acc + precio * quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cantidad, total, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartProvider, CartContext };
