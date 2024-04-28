import { Link } from "react-router-dom";
import "./styels.css"
import { ProductsList } from "../../ProductsList";

const SubNav = ()=> {
    
    return (

    <nav className="container nav-bar  section-nav">
        <ul className="nav-bar-menu">
           
            {ProductsList.map((product) => 
            
            <Link to={`/produtos/${product.id}`} key={product.id}>
               <li>{product.name}</li>
            </Link>)}
        </ul>
    </nav>

        
    );
}
export default SubNav;