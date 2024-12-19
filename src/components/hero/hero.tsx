import "./hero.css";

const Hero = () => {

  return (
    <section id="inicio" className="home">
      <article className="hero-image">
        <aside className="hero-image-opacity">
          <div className="hero-image-content">
            <h3 className="hero-image-subtitle">Web Developer</h3>
            <h2 className="hero-image-title">Javier Trejo</h2>
            <a href="#contact" className="main-btn" id="hero-btn">
              CONTACT ME
            </a>
          </div>
        </aside>
      </article>
    </section>
  );

}

export default Hero;