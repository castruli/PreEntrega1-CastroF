import { useState, useEffect, useContext } from "react"
import { ItemList } from "./Cards/ItemList"
// import dataProduct from "./dataProduct/dataProduct.json"
import { redirect, useParams } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"
import {getFirestore, getDoc, doc, collection, getDocs, query, where} from "firebase/firestore"



export const ItemListContainer = (props) => {

  	const [product, setProduct] = useState([])
	const {id} = useParams
	// const [loading, setLoading] = useState(true) 
	// const {categoryID} = useParams ()

	// useEffect(() => {
	// 	if (categoryID) {
	// 	const filterCategoryByID = dataProduct.filter(
	// 	filterProduct => filterProduct.category === categoryID)
	// 	setProduct (filterCategoryByID)
	// 	setLoading (false)}
	// 	else {
	// 	const openMenu = new Promise(resolve =>
	// 	setTimeout(() => resolve(dataProduct), 2000))
	// 	openMenu.then(dataProduct => setProduct(dataProduct)).finally(() => setLoading(false))
	// }},[categoryID])

	useEffect (() => {
		const db = getFirestore ();
		const refCollection = !id
		? collection (db, "items")
		: query(collection(db, "items"), where("categoryId","==", id));	
		getDocs(refCollection).then ((snapshot) => {
		if (snapshot.size === 0) console.log("no results");
		else setProduct(snapshot.docs.map((doc)=>{
		return{ id: doc.id, ...doc.data()};
		}));
		});
		}, []);
		
 
  return (
		<>
		  <h1>{props.greeting}</h1>
		<ItemList product={product} />
		
		</>
      
  )
}
// loading={loading}



	// recupero todos los items disponibles => a utilizar en itemListContainter


	// mapeo de los items por category
	
	// useEffect (() => {
	// 	const db = getFirestore ();
	
	// 	const category = query(collection(db, "items"),where("category", "==", "Vino"));
	
	// 	getDocs(category).then ((snapshot) => {
	// 		if (snapshot.size === 0)
	// 		console.log("no results");
	// 	else
	// 	console.log(snapshot.docs.map((doc)=>{
	// return{ id: doc.id, ...doc.data()};
	// 	}));
	// 	});
	// 	}, []);
