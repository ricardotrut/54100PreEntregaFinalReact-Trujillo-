import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import NoPage from './components/NoPage'
import Layout from './components/Layout'
import Category from './components/Category'
import './App.css'
import ProductoDetalle from './components/ProductoDetalle'
import { CartProvider } from './cartContext'
import Checkout from './components/Checkout'

function App() {


  return (
    <>
    <BrowserRouter>
    <CartProvider>
        <Routes>
  
              <Route exact path='/' element = {<Layout/>}>
              <Route index element = {<Home/>}/>
              <Route path="/category/:category" element = {<Category/>}/>
              <Route path="/producto/:id" element = {<ProductoDetalle/>}/>
              <Route path='/checkout' element = {<Checkout/>}/>
              <Route path='*' element = {<NoPage/>}/> 
         
          </Route>
        </Routes>
        </CartProvider>
    </BrowserRouter>

    </>
  )
}

export default App
