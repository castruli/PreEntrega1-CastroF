import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLogo } from "./navbar/NavLogo";
import { CartWidget } from "./navbar/CartWidget";
import NavDropdown from 'react-bootstrap/NavDropdown';


export const NavBar = () => {
  return (
   <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <NavLogo></NavLogo>
          <Nav className="me-auto">
            <Nav.Link  href="#Promociones">Promociones</Nav.Link>
            <Nav.Link  href="#Importados">Importador</Nav.Link>
            <NavDropdown  title="Bebidas" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Vinos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Aperitivos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">B. Blancas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget></CartWidget>
        </Container>
      </Navbar>
    </>
)
}
