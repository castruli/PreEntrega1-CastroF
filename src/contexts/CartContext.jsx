import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
const [itemsContext,setItemsContext] = useState([]); 
const clear = () => setItemsContext ([]);
const onRemove = (id) => {const filterItems = itemsContext.filter(item => item.id !== id)
    setItemsContext(filterItems)
    
}
const onAdd = (item, quantity) => {
    const existItems = itemsContext.some(
        (i) => i.id === item.id);  
    if(existItems){
        const updateItems = itemsContext.map(
            (i) => {if (i.id === item.id){
                return {...i,quantity: i.quantity + quantity,}
            } 
            else{ 
                return i;
            }
        });setItemsContext(updateItems);
    } 
    else {{setItemsContext(
        (prev)=> {
            return [...prev, {...item, quantity}]
            });
    };
    };
}
    return (
        <CartContext.Provider value={{itemsContext, clear, onAdd, onRemove}}>
            {children}
        </CartContext.Provider>
    );
};