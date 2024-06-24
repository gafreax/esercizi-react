import { useEffect, useState } from 'react'

async function fetchProduct(setProduct) {
  const data = await fetch( 'https://fakestoreapi.com/products/1' )
  const json = await data.json()
  setProduct(json.title)
}

function Soluzione06() {
  const [ product, setProduct ] = useState()

  useEffect(() => {
    fetchProduct(setProduct)
  },[])

  return <h1> Il prodotto si chiama {product || 'caricamento...'}</h1>
}


export default Soluzione06
