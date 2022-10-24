import Logo from "../../assets/shared/logo.svg";
import Hamburger from "../../assets/shared/icon-hamburger.svg";
import Close from "../../assets/shared/close.png"
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import "./mobile.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="A star" className="logo" />
      </Link>
      <div className="horizontal-line"></div>
      <img className="hamburger" src={Hamburger} alt="Menu"/>
      <nav className="nav">
        <NavLink to="/" end className="nav__item nav__item-00">
          Home
        </NavLink>
        <NavLink to="/destination" className="nav__item nav__item-01">
          Destination
        </NavLink>
        <NavLink to="/crew" className="nav__item nav__item-02">
          Crew
        </NavLink>
        <NavLink to="/technology" className="nav__item nav__item-03">
          Technology
        </NavLink>
        <img src={Close} alt="close" className="icon-close" />
      </nav>
    </header>
  );
}
