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
        < Button onClick={decrease}>-</Button>
        <Button className='btnCards'value={count} >{count}</Button>
        < Button onClick={increment}>+</Button>   
        <div>   
        <Button onClick={resetCount} className="btnInfo" variant="dark">Agregar al carrito</Button>
        </div>
        </>

    )
}