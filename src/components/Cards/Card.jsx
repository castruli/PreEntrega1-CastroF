import { CardItem } from "./CardItem";
import { Container } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

export const Menu = ({product, loading}) => {
    return (
        <Container className="displayCard">
            <>
            {loading ? ( <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </Spinner>) :
                        ( product.map(product => <CardItem key={product.id} product={product}/>)
            )}
            </>
        </Container>

    )
}

