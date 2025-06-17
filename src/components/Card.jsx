import svg from "../assets/react.svg";
import styles from "../styles/Card.module.css";
import { useState } from "react";

const Card = ({ image = svg, name = "Name", price = "$10" }) => {
  const [amount, setAmount] = useState(0);

  return (
    <div className={styles.card}>
      <img src={image} alt="logo" />
      <h1>{name}</h1>
      <p>{price}</p>
      <form>
        <div>
          <button
            type="button"
            onClick={() => setAmount((amount) => (amount > 1 ? amount - 1 : 0))}
          >
            -
          </button>
          <input type="text" value={amount} readOnly />
          <button
            type="button"
            onClick={() => setAmount((amount) => amount + 1)}
          >
            +
          </button>
        </div>
        <button>Add to Cart</button>
      </form>
    </div>
  );
};

export default Card;
