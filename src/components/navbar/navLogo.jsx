import imagenLogo from "../image/logoEcommers.png"

export const NavLogo = () => {
    return (
    <>
        <a className="navbar-brand" href="#">
        <img className="logo"src={imagenLogo} alt="Logo proyecto" />
        </a>
    </>)
}
