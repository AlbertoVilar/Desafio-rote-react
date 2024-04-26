import { Link } from "react-router-dom";
import HomeImg from "../../assets/home-sv.svg";
import "./styles.css";

export default function Header() {
  return (
    <header className="">
      <nav className="container  section-nav">
          <ul className="nav-menu">
              <Link to="/">
                <li className="Início">Início</li>
              </Link>
              <Link to="/produtos">
                <li className="Produtos">Produtos</li>
              </Link>
              <Link to="/">
                <li className="Sbre nós">Sobre nós</li>
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
