import styles from "../styles/HomePage.module.css";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <section className={styles.homePage}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Welcome to eStore</h1>
        <p className={styles.text}>
          Discover thousands of curated products — from everyday essentials to
          one-of-a-kind finds. Delivered fast, priced right, and backed by
          quality.
        </p>
        <Link to="/shop">
          <button className={styles.btn}>Shop Now</button>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
