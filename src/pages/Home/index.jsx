import "./styles.css";
import Logo from "../../assets/img/shared/logo.svg";

export default function Home() {
  return (
    <div className="home__container">
      <header className="header">
        <img src={Logo} alt="A star" className="logo" />
        <div className="horizontal-line"></div>
        <nav className="nav">
          <ul>
            <li className="nav__item">00 Home</li>
            <li className="nav__item">01 Destination</li>
            <li className="nav__item">02 Crew</li>
            <li className="nav__item">03 Technology</li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <div className="home__text">
          <h2>So, you want to travel to</h2>
          <h1>Space</h1>
          <h4>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </h4>
        </div>


        <div className="home__button-container">
            <button className="home__button">Explore</button>
        </div>
      </main>
    </div>
  );
}
