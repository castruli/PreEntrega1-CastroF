import { Button } from "react-bootstrap";
import { useState } from "react";

export const ItemCounter = ({onAdd, stock, initial}) =>{

    const [count,setCount] = useState (initial);
    const increment = () => {if(stock>count){setCount((previous) => previous + 1)}};
    const decrease = () => {if(count>1){setCount ((previous) => previous - 1)}};
    const resetCount = () => {onAdd (count);
                            setCount(initial)} 

    return(
        <>
        <div className="text-center">
        < Button variant="danger" onClick={decrease}>-</Button>
        <Button variant="dark" className='btnCards'value={count} >{count}</Button>
        < Button variant="success" onClick={increment}>+</Button>   
        <Button onClick={resetCount} className="text-center m-1" variant="secondary">Agregar al carrito</Button>
        </div>
        </>

    )
}