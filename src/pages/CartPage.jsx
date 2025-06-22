import styles from "../styles/CartPage.module.css";
import { Link } from "react-router";

const CartPage = ({ existingCart }) => {
  return (
    <>
      {existingCart.length == 0 ? (
        <>
          <section class={styles.emptyCart}>
            <h1 class={styles.heading}>Your Cart is empty</h1>
            <Link to="/shop">
              <button class={styles.btn}>Shop Now</button>
            </Link>
          </section>
        </>
      ) : (
        <>
          <section>
            <h1>Your Cart</h1>
            <div>
              <div></div>
              <div></div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default CartPage;
