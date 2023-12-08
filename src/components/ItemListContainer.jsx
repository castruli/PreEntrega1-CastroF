import { useState, useEffect } from "react"
import { ItemList } from "./Cards/ItemList"
import { useParams } from "react-router-dom"
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"

export const ItemListContainer = (props) => {
  	const [items, setItems] = useState([]);
	const {categoryId} = useParams ();

	useEffect (() => {
		const db = getFirestore ();		
		const refCollection = !categoryId
							  ? collection (db, "items")
							: query(collection(db, "items"), where("categoryId","==", categoryId));	
		getDocs(refCollection).then ((snapshot) => {
			if (snapshot.size === 0) console.log("no results");
			else setItems(snapshot.docs.map((doc)=>{
				return{ id: doc.id, ...doc.data()};
			}));
		});
	}, [categoryId]);
		
 
  return (
		<>
		  <h1>{props.greeting}</h1>
			<ItemList items={items} />
		</>
      
  )
}
// loading={loading}


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
