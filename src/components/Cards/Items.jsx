import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Items = ({items}) => {

  return (    
    <Card className='card'>
      <Card.Img variant="top" src={items.picture} />
      <Card.Body>
        <Card.Title>{items.title}</Card.Title>
        <Card.Text className='costStyle'>$ {items.price}</Card.Text>
        <div className='btnCards'> 
        <Link to={`/items/${items.id}`}>
        <Button variant="dark">Más información</Button>
        </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

