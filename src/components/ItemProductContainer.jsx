import { useState, useEffect } from "react"
import { ItemDetail } from "./Cards/ItemDetail"
import dataProduct from "./dataProduct/dataProduct.json"
import { useParams } from "react-router-dom"

export const ItemProductContainer = () => {

  	const [product, setProduct] = useState([])
	const [loading, setLoading] = useState(true)
	const {categoryID} = useParams ()

	useEffect(() => {
		if (categoryID) {
		const filterCategoryByID = dataProduct.filter(
		filterProduct => filterProduct.category === categoryID)
		setProduct (filterCategoryByID)
		setLoading (false)}
		else {
		const openMenu = new Promise(resolve =>
		setTimeout(() => resolve(dataProduct), 2000))
		openMenu.then(dataProduct => setProduct(dataProduct)).finally(() => setLoading(false))
	}},[categoryID])

 
  return (
      <ItemDetail product={product} loading={loading}/>
  )
}