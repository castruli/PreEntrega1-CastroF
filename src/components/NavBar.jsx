import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { NavLogo } from "./navbar/NavLogo";
import { CartWidget } from "./navbar/CartWidget";

export const NavBar = () => {
  return (  
  <>
   {[false].map((expand) => (
   <Navbar key={expand} expand={expand} bg="dark" data-bs-theme="dark">
    <Container>
      <NavLogo/>  
        <Nav className="me-auto" id='custom'>
          <NavLink className={"nav-link"} id='customb' to="/">
            <span>Home</span>
            </NavLink>
            <NavLink className={"nav-link"} id='customb' to="category/Ron">
            <span>Ron</span>
            </NavLink>
            <NavLink className={"nav-link"} id='customb' to="category/Whisky">
            <span>Whisky</span>
            </NavLink>
            <NavLink className={"nav-link"} id='customb' to="category/Cerveza">
            <span>Cerveza</span>
            </NavLink>
            <NavLink className={"nav-link"} id='customb' to="category/Vino">
            <span>Vino</span>
            </NavLink>
            <NavLink className={"nav-link"} id='customb' to="category/Vodka">
            <span>Vodka</span>
            </NavLink>
         </Nav>
      <CartWidget/>
  </Container>
  </Navbar>))}
    </>
)
}

