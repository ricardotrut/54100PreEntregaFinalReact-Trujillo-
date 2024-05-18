import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (newProduct) =>{
        setCart((c)=>{
            return [...c, newProduct]
        })
    }

    console.log(cart)
    

    return(
        <CartContext.Provider value={{cart, addToCart, cantidad: cart.length}}>
            {children}
        </CartContext.Provider>
    )
}
export {CartProvider, CartContext}