import { NavLink } from "react-router";
import styles from "../styles/Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faShop } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <FontAwesomeIcon icon={faShop} className={styles.logoIcon} />
        <h1 className={styles.logoText}>eStore</h1>
      </div>
      <div className={styles.links}>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/shop" className={styles.navLink}>
          Shop
        </NavLink>
        <NavLink to="/cart" className={styles.cartLink}>
          <FontAwesomeIcon icon={faCartShopping} />
          <span className={styles.cartItems}>0</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
