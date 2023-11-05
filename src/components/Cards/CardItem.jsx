import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const CardItem = ({product}) => {
  return (    
    <Card className='card'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{product.product_name}</Card.Title>
        <Card.Text>
         {product.country_name}
         {product.cost}
        </Card.Text>
        <Button variant="dark">Agregar al carrito</Button>
      </Card.Body>
    </Card>
 
  );
}

