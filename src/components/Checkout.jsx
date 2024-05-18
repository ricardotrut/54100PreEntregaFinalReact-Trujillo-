import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../cartContext'
import Producto from './Producto'

function Checkout() {

    const {cart} = useContext(CartContext)

  return (
<div className='container'>
        <div className='row'> 
        Checkout
            <div className='col-6'>
            {cart.map(prod => (
                    <Producto key={prod.id} {...prod}/> 
                ))}
            </div>
        </div>
    </div>
  )
}

export default Checkout