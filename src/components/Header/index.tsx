import HomeImg from "../../assets/home-sv.svg"
import "./styles.css";



export default function Header() {
  return (
    <header className="">
        
        <nav className="container  section-nav">
          <ul className="nav-menu">
            <li className="Início">Início</li>
            <li className="Produtos">Promoção</li>
            <li className="Sbre nós">Participar</li>
          </ul>
          <img src={HomeImg} alt="Home" title="Página inicial" className="home-icon"/>
        </nav>
    
    </header>
  );
}
