import { useContext } from 'react';
import {ItemCounter} from '../Cards/ItemCounter'
import { CartContext } from '../../contexts/CartContext';


export const CountButton = (items) => {

const {onAdd} = useContext(CartContext);  
const add = (quantity) => {
  onAdd(items, quantity)}

  return (
    <>
    <ItemCounter onAdd={add} initial={1} stock={items.stock}/>
    </>
  );
}


