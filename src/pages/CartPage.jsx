import styles from "../styles/CartPage.module.css";
import { Link } from "react-router";
import CartItem from "../components/CartItem";

const CartPage = ({ existingCart }) => {
  const total = () => {
    let calculateTotal = 0;

    for (let i = 0; i < existingCart.length; i++) {
      calculateTotal += existingCart[i].price * existingCart[i].units;
    }

    return calculateTotal;
  };

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
                  <CartItem key={product.id} article={product} />
                ))}
              </div>
              <div>
                <div className={styles.checkOut}>
                  <p className={styles.subtotal}>Subtotal: ${total()}</p>
                  <p className={styles.taxes}>
                    Taxes: ${(total() * 0.07).toFixed(2)}
                  </p>
                  <h1 className={styles.total}>
                    Total: ${(total() * 1.07).toFixed(2)}
                  </h1>
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
