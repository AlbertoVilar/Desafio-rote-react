import { Link } from "react-router-dom";
import HomeImg from "../../assets/home-sv.svg";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="">
      <nav className="container  section-nav">
          <ul className="nav-bar-menu">
              <NavLink to={"/home"} className={({isActive}) => isActive ? "nave-menu menu-active" : "nave-menu"}>
                <li className="nav-menu">Início</li>
              </NavLink>
              <NavLink  to={"/produtos"} className={({isActive}) => isActive ? "nave-menu menu-active" : "nave-menu"}>
                <li className="nav-menu">Produtos</li>
              </NavLink>
              <NavLink  to={"/sobre"} className={({isActive}) => isActive ? "nave-menu menu-active" : "nave-menu"}>
                <li className="nav-menu">Sobre nós</li>
              </NavLink>
          </ul>
          <Link to={"/"}>
                <img
                src={HomeImg}
                alt="Home"
                title="Página inicial"
                className="home-icon"
              />
          </Link>
          
      </nav>
    </header>
  );
}
