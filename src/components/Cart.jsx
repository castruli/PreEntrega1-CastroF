import { Card, Container } from "react-bootstrap"
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Table from 'react-bootstrap/Table';


export const Cart = () => {
  const { items, clear} = useContext(CartContext);
  console.log(items)

  const total = items.reduce((acumulador,valorActual) => acumulador + valorActual.price , 0 );















if (items.length === 0){
  return <div>no hay elementos</div>
}   
  //  const items = [
  //   {
  //     id:2,
  //     title:"hola",
  //     price: "100",
  //     stock: "100",
  //     quantity:3,

  //   },
  //   {
  //     id:3,
  //     title:"hola",
  //     price: "100",
  //     stock: "100",
  //     quantity:1,
  //   }
  // ]
  // console.log(items)


    return(
      
        <Container>
        <h1>Carrito</h1>
          
    
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Cantidad</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item) =>(
        <tr key={item.id}>
          <td>{item.quantity}</td>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>

           {/* falta incorporar onRemove en context y definir funcion en child  */}
          <button>Eliminar</button>

          </td>
        </tr>
        ))}
      </tbody>
      <div>
        <button>Total: $ {total}</button>
        
      </div>
    </Table> 

 <button onClick={clear} >clear</button>

</Container> 
)}

