import "./logo.css";

const HeaderLogo = () => {

  return (
    <div className="logo">
      <button type="button" onClick={() => scrollTo(0,0)}>
        Javier Trejo
      </button>
    </div>
  );
  
}

export default HeaderLogo;