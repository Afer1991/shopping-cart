import { NavLink } from "react-router";

const Navigation = ({ cart }) => {
  return (
    <nav>
      <div>Item in cart is: {cart[0].length}</div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  );
};

export default Navigation;
