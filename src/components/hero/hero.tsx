import "./hero.css";

const Hero = () => {

  return (
    <section id="inicio" className="home">
      <article className="hero-image">
        <aside className="hero-image-opacity">
          <div className="hero-image-content">
            <h2 className="hero-image-title">
              BIENVENIDO <br /> a mi Website 😎!
            </h2>
            <a href="#contacto" className="main-btn" id="hero-btn">
              CONTÁCTAME
            </a>
          </div>
        </aside>
      </article>
    </section>
  );

}

export default Hero;