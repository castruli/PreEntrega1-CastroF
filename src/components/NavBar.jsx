import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { NavLogo } from "./navbar/NavLogo";
import { CartWidget } from "./navbar/CartWidget";
import dataProduct from "./dataProduct/dataProduct.json"
import { NavbarCollapse } from 'react-bootstrap';

// const categoryFilter = dataProduct.map( item => item.category )
// const categoriesNavBar = new Set(categoryFilter)








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
            {/* {[...categoriesNavBar].map(category => (
            <NavLink  className={"nav-link"} id='customb' key={category} to={`/category/${category}`}>
            <span>{category}</span>
            </NavLink>
            ))} */}
        </Nav>
      <CartWidget>
      </CartWidget>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} id='custom-toggle' />

      <Navbar.Offcanvas
             id={`offcanvasNavbar-expand-${expand}`}
             aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
             placement="end"
           >
      </Navbar.Offcanvas>
  </Container>
  </Navbar>))}
    </>
)
}

{/* <>
{[false].map((expand) => (
  <Navbar key={expand} expand={expand} bg="dark" data-bs-theme="dark" >
    <Container> */}
      {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
      {/* <Navbar >
        <Container> */}
        {/* <NavLogo/>  
          <Nav className="me-auto custom">
          <NavLink className={"nav-link"} to="/">
            <span>Home</span>
            </NavLink>
            {[...categoriesNavBar].map(category => (
            <NavLink  className={"nav-link"}  key={category} to={`/category/${category}`}>
            <span>{category}</span>
            </NavLink>
            ))}
          </Nav>
    
          <CartWidget/> */}
        {/* </Container>
      </Navbar> */}

      {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >

      </Navbar.Offcanvas>
    </Container>
  </Navbar> */}
{/* ))}
</> */}
{/* );
} */}
