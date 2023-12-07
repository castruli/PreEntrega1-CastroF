import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { CountButton } from './CountButton';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';


export const ItemsMasInfo = ({items}) => {
    const item = {...items}

  return (   
    // console.log(item) 
    <Container>
    <Card className='card'>
      <Card.Img variant="top" src={item.picture} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.descripcion}</Card.Subtitle>
        <Card.Text className='costStyle'>Precio {item.price}</Card.Text>
        <Card.Text className='costStyle'>Stock {item.stock}</Card.Text>

       <CountButton items={item} stock={item.stock}/>        

       
      </Card.Body>
    </Card>
    </Container>
  );
}

