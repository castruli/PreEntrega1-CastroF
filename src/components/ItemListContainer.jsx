import { Carousels } from "./Carousels"
import { ItemDetailContainer } from "./ItemDetailContainer"

export const ItemListContainer = (props) => {
return (
    <>
    <Carousels/>
    <h1>{props.greeting}</h1>
    <ItemDetailContainer></ItemDetailContainer>

   
    </>
)
}


