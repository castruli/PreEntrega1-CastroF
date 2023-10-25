import { MenuNavBar } from "./navbar/MenuNavBar";
import { NavLogo } from "./navbar/NavLogo";
import { CartWidget } from "./CartWidget";


export const NavBar = () => {
return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <>
    <NavLogo></NavLogo>
    <MenuNavBar></MenuNavBar>
    <CartWidget></CartWidget>
    </>
    </nav>  
    </>
)
}
