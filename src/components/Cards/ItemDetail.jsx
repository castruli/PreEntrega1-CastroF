import { Items } from "./Items";
import { Container } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

export const ItemDetail = ({product, loading}) => {
    return (
        <Container className="displayCard">
            <>
            {loading ? ( <Spinner animation="border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                        </Spinner>) :
                        ( product.map(product => <Items key={product.id} product={product}/>)
            )}
            </>
        </Container>

    )
}

