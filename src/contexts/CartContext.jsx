import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
// creo una array vacio que almacenara los items agregados por el user para realizar compra.
// la definición de que hacer con los items, lo definimos en el context. por eso también aplicamos funcion clear
const [items,setItems] = useState([]); 
const onAdd = (item, quantity) => {
    const existItems = items.some((i) => i.id === items.id);
    console.log(existItems)
 
    if(existItems){
        const updateItems = items.map((i) => {
            if (i.id === items.id){
                return { ... i,
                quantity: i.quantity + quantity,}
            } else{
                return i;
            }
        });
        setItems(updateItems);
    } else {
    {setItems((prev)=> {return [...prev, {...item, quantity}]
});};
};}

const clear = () => setItems ([]);


// console.log(product)
    return (

// al invocar items dentro del value del context provider, cada consumidor podrá utilizar los items seleccionados por el usuario
// la compra.
// todo lo que quiero utilizar lo agrego dentro del value y lo declaro dentro de provider. todas las funciones que tengan incidencia
// sobre los itemes. 

// por ejemplo la funcion clear es un setItems, el objetivo de la misma es cambiar el estado del array de productos, en este caso 
// devolviendo un array vacio. es decir al invocar la función clear cambia el estado de setItems, actualizando a []

        <CartContext.Provider value={{items, clear, onAdd}}>
            {children}
        </CartContext.Provider>
    );
};