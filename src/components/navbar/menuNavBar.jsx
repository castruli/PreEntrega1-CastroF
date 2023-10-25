import { NavBarItems } from "./NavBarItems"
import { NavBarSubItems } from "./NavBarSubItems"

export const MenuNavBar = () => {
    return (
    <> 
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav"> 
          <>
            <NavBarItems text="Promociones"></NavBarItems>
            <NavBarItems text="Importados"></NavBarItems>
          </>
            <li className="nav-item dropdown">
             <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Bebidas</a>
              <ul className="dropdown-menu" >
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