import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header>
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light borderAbajo">

            <div className="container-fluid">
                <Link  to= {"/"} className="navbar-brand" href="./index.html">
                    <img className="logo" src="/assets/img/guitarra-electrica.png" alt="Logo"/>
                    Ricardo Guitars
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to = {'/category/guitarras'} className="nav-link active borderAbajo" aria-current="page" href="#">Guitarras</Link>
                        </li>
                        <li className="nav-item linknav">
                            <Link to = {'/category/bajos'} className="nav-link" href="#">Bajos</Link>
                        </li>
                        <li className="nav-item linknav">
                            <Link to = {'/category/baterias'} className="nav-link" href="#">Baterias</Link>
                        </li>
                        <li className="nav-item linknav">
                            <Link to = {'/category/amplificadores'} className="nav-link" href="#">Amplificadores</Link>
                        </li>
                        <li className="nav-item linknav">
                            <Link to = {'/category/teclados'} className="nav-link" href="#">Teclados</Link>
                        </li>
                        <li>
                            <Link to={'/checkout'}><CartWidget/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default NavBar