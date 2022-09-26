import Logo from "../../assets/img/shared/logo.svg";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Header () {
  return (
    <header className="header">
    <img src={Logo} alt="A star" className="logo" />
    <div className="horizontal-line"></div>
    <nav className="nav">
        <NavLink className="nav__item nav__item-00">Home</NavLink>
        <NavLink className="nav__item nav__item-01">Destination</NavLink>
        <NavLink className="nav__item nav__item-02">Crew</NavLink>
        <NavLink className="nav__item nav__item-03">Technology</NavLink>
    </nav>
  </header>
  )
};