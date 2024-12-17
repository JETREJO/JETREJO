import { useState } from "react";
import HeaderButton from "./button/button";
import "./header.css";
import HeaderLogo from "./logo/logo";
import HeaderMenu from "./menu/menu";

const Header = () => {

  const [isActive, setIsActive] = useState<boolean>(false);

  function toggleMenuActive() {
    setIsActive(!isActive);
  }

  return (
    <header className="header">
      <section className="container">
        <HeaderLogo/>
        <HeaderButton setMenuActive={() => toggleMenuActive()} isMenuActive={isActive}/>
        <HeaderMenu isMenuActive={isActive} handleMenuActive={() => toggleMenuActive()}/>
      </section>
    </header>
  );
}

export default Header;
