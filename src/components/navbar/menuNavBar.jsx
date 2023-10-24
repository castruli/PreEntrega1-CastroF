import { NavBarItems } from "./navBarItems"
import { NavBarSubItems } from "./navBarSubItems"



export const MenuNavBar = () => {
    return (
    <> 
      <div class="container-fluid">
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav"> 
          <>
            <NavBarItems text="Promociones"></NavBarItems>
            <NavBarItems text="Importados"></NavBarItems>
          </>
            <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Bebidas</a>
              <ul class="dropdown-menu" >
              <>
                <NavBarSubItems text="Vinos"></NavBarSubItems>
                <NavBarSubItems text="Aperitivos"></NavBarSubItems>
                <NavBarSubItems text="B.Blancas"></NavBarSubItems>
              </>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
 
    </>
  )
}