import { NavLink} from "react-router-dom";

export default function MainNavBar(){

    return(
        <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Chi Siamo </NavLink>
                    <NavLink to="/HomePage">Home Page</NavLink>
                    <NavLink to="/Prodotti">Prodotti</NavLink>
                </li>
            </ul>
        </nav>
        
        
        </>

    );
}