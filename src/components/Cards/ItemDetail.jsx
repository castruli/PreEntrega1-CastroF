import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { ItemCounter } from './ItemCounter';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';


export const ItemDetail = ({item}) => {
  const {onAdd} = useContext(CartContext);  
  const add = (quantity) => {
    onAdd(item, quantity)}

  return (   
    <Container>
    <Card className='card'>
      <Card.Img variant="top" src={item.picture} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.descripcion}</Card.Subtitle>
        <Card.Text className='costStyle'>Precio {item.price}</Card.Text>
        <Card.Text className='costStyle'>Stock {item.stock}</Card.Text>
        <ItemCounter onAdd={add} initial={1} stock={item.stock}/>
      </Card.Body>
    </Card>
    </Container>
  );
}

