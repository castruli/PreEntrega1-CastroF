import { Items } from "./Items";
import { Container } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

export const ItemList = ({items, loading}) => {
    return (
        <Container className="displayCard">
            <>
            {loading ? ( <Spinner animation="grow" variant="dark" role="status">
                        <span className="visually-hidden">Cargando...</span>
                        </Spinner>) :
                        ( items.map(items => <Items key={items.id} items={items}/>)
            )}
            </>
        </Container>

    )
}

