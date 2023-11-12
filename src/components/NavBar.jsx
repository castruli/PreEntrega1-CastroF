import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { NavLogo } from "./navbar/NavLogo";
import { CartWidget } from "./navbar/CartWidget";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import dataProduct from "./dataProduct/dataProduct.json"

const categoryFilter = dataProduct.map( item => item.category )
const categoriesNavBar = new Set(categoryFilter)


export const NavBar = () => {
  return (  
   <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <NavLogo></NavLogo>
          <Nav className="me-auto">
          <NavLink className={"nav-link"} to="/">
            <span>Home</span>
            </NavLink>
            {[...categoriesNavBar].map(category => (
            <NavLink  className={"nav-link"}  key={category} to={`/category/${category}`}>
            <span>{category}</span>
            </NavLink>
            ))}
   
            {/* <NavDropdown  title="Bebidas" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Vinos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Aperitivos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">B. Blancas</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <CartWidget></CartWidget>
        </Container>
      </Navbar>
    </>
)
}
