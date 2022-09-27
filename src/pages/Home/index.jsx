import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home__container container">
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
          <button className="home__button" onClick={()=> navigate("/destination")}>Explore</button>
        </div>
      </main>
    </div>
  );
}
