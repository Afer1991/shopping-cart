const CartPage = ({ cartState }) => {
  const [cart, setCart] = cartState;

  return (
    <>
      <h1>Cart Page</h1>
      <button
        onClick={() => {
          setCart([1, 2, 3]);
        }}
      >
        Add to Cart
      </button>
    </>
  );
};

export default CartPage;
