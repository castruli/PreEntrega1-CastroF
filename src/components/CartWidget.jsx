import imagenCarrito from '../components/image/carritoCompras.png'
import { CartCounter } from './navbar/cartcounter'

export const CartWidget = () => {
    return (
        <div class="propCarrito">
        <img src={imagenCarrito} alt="Logo proyecto" />
        <CartCounter counter={0}></CartCounter>
        </div>
    )
}