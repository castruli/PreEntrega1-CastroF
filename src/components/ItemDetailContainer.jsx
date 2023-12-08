import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {getFirestore, getDoc, doc} from "firebase/firestore"
import { ItemDetail } from "./Cards/ItemDetail"
import Spinner from 'react-bootstrap/Spinner';


export const ItemDetailContainer = ()=> {
  const [item, setItem] = useState()
  const {id} = useParams ();

  useEffect (() => {
    const db = getFirestore ();
	  const refDoc = doc(db, "items", id);
	  getDoc(refDoc).then ((snapshot) => {
	  setItem({id: snapshot.id, ...snapshot.data() });
	  });  
	  },[id]);

    return (
   		item ? <ItemDetail item={item}/>
      : <Spinner></Spinner>

  )
}

