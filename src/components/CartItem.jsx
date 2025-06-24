import styles from "../styles/CartItem.module.css";

const CartItem = ({ article, removeFromCart }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={article.image} />
      </div>
      <div>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.price}>Price: ${article.price}</p>
        <p className={styles.qty}> Qty: {article.units}</p>
        <p className={styles.total}>
          Total: ${(article.price * article.units).toFixed(2)}
        </p>
        <button
          className={styles.btn}
          onClick={() => removeFromCart(article.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
