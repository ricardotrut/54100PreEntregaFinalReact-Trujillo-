import React from 'react'
import Producto from './Producto'

function Productos({items}) {
  return (
    <div className='container'>
        <div className='row'> 
            <div className='col-6'>
            {items.map(prod => (
                    <Producto key={prod.id} {...prod}/> 
                ))}
            </div>
        </div>
    </div>
  )
}

export default Productos