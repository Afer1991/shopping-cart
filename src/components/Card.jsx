import styles from "../styles/Card.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Card = ({ article, addCart }) => {
  const [amount, setAmount] = useState(0);

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={article.image} alt="product" />
      </div>
      <h1 className={styles.name}>{article.title}</h1>
      <p className={styles.price}>{"$" + article.price}</p>
      <div className={styles.addItem}>
        <div>
          <button
            className={styles.inputBtn}
            type="button"
            onClick={() => setAmount((amount) => (amount > 1 ? amount - 1 : 0))}
          >
            <FontAwesomeIcon icon={faMinus} className={styles.minusIcon} />
          </button>
          <input className={styles.input} type="text" value={amount} readOnly />
          <button
            className={styles.inputBtn}
            type="button"
            onClick={() => setAmount((amount) => amount + 1)}
          >
            <FontAwesomeIcon icon={faPlus} className={styles.plusIcon} />
          </button>
        </div>
        <button
          className={styles.btn}
          onClick={() => {
            addCart(article, amount);
            setAmount(0);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
