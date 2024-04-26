import { Link } from "react-router-dom";
import HomeImg from "../../assets/home-sv.svg";
import "./styles.css";

export default function Header() {
  return (
    <header className="">
      <nav className="container  section-nav">
          <ul className="nav-bar-menu">
              <Link to="/">
                <li className="nav-menu">Início</li>
              </Link>
              <Link to="/produtos">
                <li className="nav-menu">Produtos</li>
              </Link>
              <Link to="/sobre">
                <li className="nav-menu">Sobre nós</li>
              </Link>
          </ul>
          <img
          src={HomeImg}
          alt="Home"
          title="Página inicial"
          className="home-icon"
        />
      </nav>
    </header>
  );
}
