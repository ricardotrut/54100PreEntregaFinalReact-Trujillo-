import React from 'react'
import Category from './Category'
import { Link } from 'react-router-dom'

function Producto({name, url, id, category}) {
  return (

    <div className="card" style={{width: '18rem'}}>
    <img src={'/images/' + url} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Nombre:{name}</h5>
            <p className="card-text">Categoria:{category}</p>
            <p className="card-text">ID:{id}</p>
            <Link to = {'/producto/' + id} className="btn btn-primary">detalles</Link>
        </div>
    </div>
  )
}

export default Producto