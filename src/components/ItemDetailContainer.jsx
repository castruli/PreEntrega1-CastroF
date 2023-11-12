import { useState, useEffect } from "react"
import dataProduct from "./dataProduct/dataProduct.json"
import { useParams } from "react-router-dom"
// import { ItemsDescription } from "./Cards/ItemsDescription"
import { ItemsMasInfo } from "./Cards/ItemsMasInfo"
import Spinner from 'react-bootstrap/Spinner';


export const ItemDetailContainer = () => {

  	const [productId, setProductId] = useState()
	const {id} = useParams ()

	useEffect(() => {
        setProductId (dataProduct.find(filterProduct => filterProduct.id === Number(id)))}, [id]) 
        if (!productId) return (<Spinner/>)


  return (
      <ItemsMasInfo product={productId}/>
  )
}