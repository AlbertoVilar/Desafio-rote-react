import { Link } from "react-router-dom";
import "./styels.css"
import { ProductsList } from "../../ProductsList";
import { NavLink } from "react-router-dom";

const SubNav = ()=> {
    
    return (

    <nav className="container nav-bar  section-nav">
        <ul className="nav-bar-menu">
           
            {ProductsList.map((product) => 
            
            <NavLink to={`/produtos/${product.id}`} key={product.id}  className={({isActive}) => isActive ? "nave-menu menu-active" : "nave-menu"}>
               <li>{product.name}</li>
            </NavLink>)}
        </ul>
    </nav>

        
    );
}
export default SubNav;