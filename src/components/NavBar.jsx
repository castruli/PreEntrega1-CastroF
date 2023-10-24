import { MenuNavBar } from "./navbar/menuNavBar";

import { NavLogo } from "./navbar/navLogo";
import { CartWidget } from "./CartWidget";


export const NavBar = () => {
return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <>
    <NavLogo></NavLogo>
    <MenuNavBar></MenuNavBar>
    <CartWidget></CartWidget>
    </>
    </nav>


    
    </>
)
}
