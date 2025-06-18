import svg from "../assets/react.svg";
import styles from "../styles/Card.module.css";
import { useState } from "react";

const Card = ({ image = svg, name = "Name", price = "$10" }) => {
  const [amount, setAmount] = useState(0);

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={image} alt="product" />
      </div>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.price}>{price}</p>
      <form className={styles.form}>
        <div>
          <button
            className={styles.inputBtn}
            type="button"
            onClick={() => setAmount((amount) => (amount > 1 ? amount - 1 : 0))}
          >
            -
          </button>
          <input className={styles.input} type="text" value={amount} readOnly />
          <button
            className={styles.inputBtn}
            type="button"
            onClick={() => setAmount((amount) => amount + 1)}
          >
            +
          </button>
        </div>
        <button className={styles.btn}>Add to Cart</button>
      </form>
    </div>
  );
};

export default Card;
