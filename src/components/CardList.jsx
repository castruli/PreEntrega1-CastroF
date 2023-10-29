import { useState, useEffect } from "react"
import { Menu } from "./Cards/Card"
import dataProduct from "./dataProduct/dataProduct.json"

export const CardList = () => {

  const [product, setProduct] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const openMenu = new Promise(resolve =>
		setTimeout(() => resolve(dataProduct), 3000))
		openMenu.then(dataProduct => setProduct(dataProduct)).finally(() => setLoading(false))
	},[])

  return (
      <Menu product={product} loading={loading}/>
  )
}