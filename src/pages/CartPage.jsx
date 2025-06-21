import { Link } from "react-router";
const CartPage = ({ existingCart }) => {
  return (
    <>
      {existingCart.length == 0 ? (
        <>
          <h1>Your Cart is empty</h1>
          <Link to="/shop">
            <button>Shop Now</button>
          </Link>
        </>
      ) : (
        <>
          <h1>Your Cart</h1>
        </>
      )}
    </>
  );
};

export default CartPage;
