import imagenCarrito from '../components/image/carritoCompras.png'
import { CartCounter } from './navbar/Cartcounter'

export const CartWidget = () => {
    return (
        <div className="propCarrito">
        <img src={imagenCarrito} alt="Logo proyecto" />
        <CartCounter counter={0}></CartCounter>
        </div>
    )
}