import "./menu.css";

interface HeaderMenuProps {
  isMenuActive: boolean;
  handleMenuActive: Function;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ isMenuActive, handleMenuActive }) => {

  return (
    <>
      <nav className={`menu ${(isMenuActive) ? "is-active" : ""}`} >
        <a href="#inicio">Home</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#stack">Stack</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </nav>
      {
        isMenuActive && <div
          className="menu-curtain"
          onClick={() => handleMenuActive(!isMenuActive)} />
      }
    </>
  );

}

export default HeaderMenu;