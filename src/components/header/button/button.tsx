import "./button.css";

interface HeaderButtonProps {
  setMenuActive: Function;
  isMenuActive: boolean;
}

const ICON_CLOSE = <svg className="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" /></svg>;
const ICON_MENU = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" /></svg>;

const HeaderButton: React.FC<HeaderButtonProps> = ({setMenuActive, isMenuActive}) => {

  return (
    <button className="menu-btn" onClick={() => setMenuActive()}>
      { !isMenuActive && ICON_MENU }
      { isMenuActive && ICON_CLOSE }
    </button>
  );

}

export default HeaderButton;