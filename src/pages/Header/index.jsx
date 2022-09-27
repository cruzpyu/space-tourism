import Logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Header () {
  return (
    <header className="header">
    <img src={Logo} alt="A star" className="logo" />
    <div className="horizontal-line"></div>
    <nav className="nav">
        <NavLink to="/" end className="nav__item nav__item-00">Home</NavLink>
        <NavLink to="/destination" className="nav__item nav__item-01">Destination</NavLink>
        <NavLink to="/crew" className="nav__item nav__item-02">Crew</NavLink>
        <NavLink className="nav__item nav__item-03">Technology</NavLink>
    </nav>
  </header>
  )
};