import styles from "../styles/CartPage.module.css";
import { Link } from "react-router";
import CartItem from "../components/CartItem";
import { useState } from "react";

const CartPage = ({ existingCart, updateCart, removeCart }) => {
  const [checkOut, setCheckOut] = useState(false);

  const total = () => {
    let calculateTotal = 0;

    for (let i = 0; i < existingCart.length; i++) {
      calculateTotal += existingCart[i].price * existingCart[i].units;
    }

    return calculateTotal;
  };

  return (
    <>
      {existingCart.length == 0 && checkOut == false ? (
        <>
          <section className={styles.emptyCart}>
            <h1 className={styles.heading}>Your Cart is empty</h1>
            <Link to="/shop">
              <button className={styles.btn}>Shop Now</button>
            </Link>
          </section>
        </>
      ) : checkOut == true ? (
        <>
          <section className={styles.checkOutPage}>
            <h1 className={styles.checkOutHeading}>
              Thank you for shopping with eStore!
            </h1>
            <h2 className={styles.checkOutSubheading}>
              We're getting your items ready.<br></br>Keep an eye out.
            </h2>
            <Link to="/">
              <button className={styles.btn}>Home</button>
            </Link>
          </section>
        </>
      ) : (
        <>
          <section className={styles.cartSection}>
            <h1 className={styles.cartHeading}>Your Cart</h1>
            <div className={styles.yourCart}>
              <div className={styles.items}>
                {existingCart.map((product) => (
                  <CartItem
                    key={product.id}
                    article={product}
                    removeFromCart={updateCart}
                  />
                ))}
              </div>
              <div>
                <div className={styles.checkOut}>
                  <p className={styles.subtotal}>
                    Subtotal: ${total().toFixed(2)}
                  </p>
                  <p className={styles.taxes}>
                    Taxes: ${(total() * 0.07).toFixed(2)}
                  </p>
                  <h1 className={styles.total}>
                    Total: ${(total() * 1.07).toFixed(2)}
                  </h1>
                  <button
                    className={styles.btn}
                    onClick={() => {
                      setCheckOut(true);
                      removeCart();
                    }}
                  >
                    Check Out
                  </button>
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
