import { Container } from "react-bootstrap"
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import {getFirestore, collection, addDoc} from "firebase/firestore"

const initialForm = {
  name:"",
  phone: "",
  email: "",
}

export const Cart = () => {
  const navigate = useNavigate ();
  const { itemsContext, clear, onRemove} = useContext(CartContext);
  const [buyer, setBuyer] = useState(initialForm);
  const total = itemsContext.reduce((acumulador,valorActual) => acumulador + (valorActual.price * valorActual.quantity) , 0 );
  
  const handleChange = (event) =>{
    setBuyer(buyer => {
        return{
            ...buyer,
            [event.target.name]: event.target.value
        }
    })
  };
  const sendOrder = (ev) => {ev.preventDefault()
  
    const order = {
        buyer: buyer,
        itemsContext: itemsContext,
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
        if (id) {
        clear ();
        alert("Su orden: " + id + " ha sido completada!");
        setBuyer(initialValues);
       
      }
    });
    ;
  };

    if (itemsContext.length === 0){
      return (
      <><h1>No hay elementos</h1>
      <div className="text-center">
      <Button variant="dark" type="submit" onClick={() => navigate("/")} > VOLVER A HOME</Button>
      </div>
      </>)
    }   
  return(
    <>
    <h1>¡Confirma tu compra!</h1>       
    <div id="table" >
    <Table  striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Cantidad</th>
          <th>Producto</th>
          <th>Precio</th>
          <th></th>
        </tr>
      </thead>
        {itemsContext?.map((item) =>(
        <tbody>    
          <tr key={item.id}>
          <td>{item.quantity}</td>
          <td>{item.title}</td>
          <td> $ {item.price}</td>
          <td>
            <button className="remove" onClick={() => onRemove(item.id)}>X</button>
          </td>
        </tr>
      </tbody>
        ))}
    </Table>
    </div>
    <div className="text-center"> 
    <Button className="m-3" variant="dark" type="submit">
        Total: $ {total}
      </Button>
      <Button className="m-3" variant="dark" type="submit" onClick={clear}>
          Vaciar Carrito
      </Button>
  </div>
  <div>  
    <Form id="form">
    <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" value={buyer.name} onChange={handleChange} required name="name" placeholder="Nombre y Apellido" />
        <Form.Text className="text-muted">
          Completar con nombre completo de quien reciba los productos
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Mail</Form.Label>
        <Form.Control type="text" value={buyer.email} onChange={handleChange} name="email" placeholder="Ingrese Mail" />
      </Form.Group>
      <Form.Group>
      <Form.Label>Telefono</Form.Label>
        <Form.Control type="numer" value={buyer.phone} onChange={handleChange} name="phone" placeholder="Ingrese Telefono" />
      </Form.Group> 
       <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Confirmar compra" />
      </Form.Group>
    </Form>
  </div>
  <div className="text-center">
    <Button variant="dark" type="submit" onClick={sendOrder}>
        ¡Comprar!
      </Button>
  </div>
</> 
)}


