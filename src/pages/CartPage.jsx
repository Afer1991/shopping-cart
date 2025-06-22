import styles from "../styles/CartPage.module.css";
import { Link } from "react-router";
import CartItem from "../components/CartItem";

const CartPage = ({ existingCart }) => {
  console.log(existingCart);
  return (
    <>
      {existingCart.length == 0 ? (
        <>
          <section className={styles.emptyCart}>
            <h1 className={styles.heading}>Your Cart is empty</h1>
            <Link to="/shop">
              <button className={styles.btn}>Shop Now</button>
            </Link>
          </section>
        </>
      ) : (
        <>
          <section>
            <h1 className={styles.cartHeading}>Your Cart</h1>
            <div className={styles.yourCart}>
              <div className={styles.items}>
                {existingCart.map((product) => (
                  <CartItem article={product} />
                ))}
              </div>
              <div>
                <div className={styles.checkOut}>
                  <p className={styles.subtotal}>Subtotal: $700</p>
                  <p className={styles.taxes}>Taxes: $70</p>
                  <h1 className={styles.total}>Total: $770</h1>
                  <button className={styles.btn}>Check Out</button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default CartPage;
