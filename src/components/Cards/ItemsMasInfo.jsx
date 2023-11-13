import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const ItemsMasInfo = ({product}) => {
  return (    
    <Container>
    <Card className='card'>
      <Card.Img variant="top" src={product.picture} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">   {product.descripcion}</Card.Subtitle>
        <Card.Text className='costStyle'>{product.price}</Card.Text>
        <Button className='btnInfo' variant="dark">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    
    </Container>
  );
}

