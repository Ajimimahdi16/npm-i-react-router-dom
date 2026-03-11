import { NavLink } from "react-router-dom";

export default function MainNavBar() {
  return (
    <nav className="main-nav">
      
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      
      <NavLink to="/prodotti">
        <button>Chi Siamo</button>
      </NavLink>
      
      <NavLink to="/chi-siamo">
        <button>Prodotti</button>
      </NavLink>
    </nav>
  );
}