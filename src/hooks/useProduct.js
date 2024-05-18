import { useState } from "react"
import { useEffect } from "react"
import { getitems } from "../services/items"


const useProduct = ()=>{
    const [productos, setProductos] = useState([])

    const getProductos = async ()=>{
      const products = await getitems()
      setProductos(products)
    }
  
    useEffect(()=>{
      getProductos()
    },[])

    return productos
}
export default useProduct