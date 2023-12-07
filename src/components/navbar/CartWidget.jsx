import imagenCarrito from '../image/carritoCompras.png'
import { CartCounter } from '../Cards/Cartcounter'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export const CartWidget = () => {
    const { items} = useContext(CartContext);
    const total = items.reduce((acumulador,valorActual) => acumulador + valorActual.quantity , 0 );

 
        
    


    return (
        <Link to='/cart'>
        <div className="propCarrito">
        <img src={imagenCarrito} alt="Logo proyecto" />
        <CartCounter counter={total}></CartCounter>
        {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style="none" /> */}

        
        </div>
        </Link>
    )
}