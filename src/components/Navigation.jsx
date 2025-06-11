import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav>
      <h1>eStore</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
