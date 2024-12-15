import "./menu.css";

interface HeaderMenuProps {
  isMenuActive: boolean;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ isMenuActive }) => {

  return (
    <nav className={`menu ${(isMenuActive) ? "is-active" : ""}`} >
      <a href="#inicio">Inicio</a>
      <a href="#acerca">Acerca</a>
      <a href="#servicios">Servicios</a>
      <a href="#portafolio">Portafolio</a>
      <a href="#certificaciones">Certificaciones</a>
      <a href="#contacto">Contacto</a>
    </nav>
  );

}

export default HeaderMenu;