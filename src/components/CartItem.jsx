import styles from "../styles/CartItem.module.css";

const CartItem = ({ article }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={article.image} />
      </div>
      <div>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.price}>Price: ${article.price}</p>
        <p className={styles.total}>
          Total: ${(article.price * article.units).toFixed(2)}
        </p>
        <div>
          <button className={styles.inputBtn}>-</button>
          <input className={styles.input} type="text" />
          <button className={styles.inputBtn}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
