import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {getFirestore, getDoc, doc, collection, getDocs, query, where} from "firebase/firestore"
import { ItemsMasInfo } from "./Cards/ItemsMasInfo";


import Spinner from 'react-bootstrap/Spinner';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


// import { CountButton } from './CountButton';


export const ItemDetailContainer = ()=> {
  const [items, setItem] = useState()
  const {id} = useParams ()
  const db = getFirestore ();

  useEffect (() => {
	  
	  const refDoc = doc(db, "items", id);
	  getDoc(refDoc).then ((snapshot) => {
	  setItem({id: snapshot.id, ...snapshot.data() });
	  });  
	  },[id]);

    return (
   		// console.log(items)
		<ItemsMasInfo items={items}/>

  )
}



//recupero de un items solo => a  utilizar en ItmesDetails


	// useEffect(() => {
  //       setProductId (dataProduct.find(filterProduct => filterProduct.id === Number(id)))}, [id]) 
  //       if (!productId) return (<Spinner/>)
