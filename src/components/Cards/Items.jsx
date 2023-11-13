import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Items = ({product}) => {
  return (    
    <Card className='card'>
      <Card.Img variant="top" src={product.picture} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className='costStyle'>{product.price}</Card.Text>
        <div className='btnCards'> 
        <Button variant="dark">Agregar al carrito</Button>
        <Link to={`/items/${product.id}`}>
        <Button variant="dark">Más informacion</Button>
        </Link>
        </div>
      </Card.Body>
    </Card>
 
  );
}

