import { NavLink } from "react-router-dom";

export default function MainNavBar() {
  return (
    <nav className="main-nav">
      
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      
      <NavLink to="/ChiSiamo">
        <button>Chi Siamo</button>
      </NavLink>
      
      <NavLink to="/Prodotti">
        <button>Prodotti</button>
      </NavLink>
    </nav>
  );
}