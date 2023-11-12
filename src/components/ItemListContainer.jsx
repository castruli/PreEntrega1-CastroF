import { Carousels } from "./Carousels"
import { ItemProductContainer } from "./ItemProductContainer"

export const ItemListContainer = (props) => {
return (
    <>
    <Carousels/>
    <h1>{props.greeting}</h1>
    <ItemProductContainer></ItemProductContainer>

   
    </>
)
}


