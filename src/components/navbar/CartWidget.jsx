import imagenCarrito from '../image/carritoCompras.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export const CartWidget = () => {
    const { itemsContext} = useContext(CartContext);
    const total = itemsContext.reduce((acumulador,valorActual) => acumulador + valorActual.quantity , 0 );
     return (
        <Link to='/cart'>
        <div className="propCarrito">
        <img src={imagenCarrito} alt="Logo proyecto" />
        <div className="counter">{total}</div>
        </div>
        </Link>
    )
}