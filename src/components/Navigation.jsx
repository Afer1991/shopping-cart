import { NavLink } from "react-router";
import styles from "../styles/Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>eStore</h1>
      <div className={styles.links}>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/shop" className={styles.navLink}>
          Shop
        </NavLink>
        <NavLink to="/contact" className={styles.navLink}>
          Contact
        </NavLink>
        <NavLink to="/cart" className={styles.navLink}>
          <FontAwesomeIcon icon={faCartShopping} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
