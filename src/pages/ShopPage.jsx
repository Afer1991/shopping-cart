import Card from "../components/Card.jsx";
import styles from "../styles/ShopPage.module.css";
import { useState, useEffect } from "react";

const ShopPage = ({ updateCart }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section>
      <div className={styles.container}>
        <h1 className={styles.heading}>Products</h1>
        <div className={styles.cards}>
          {products &&
            products.map((product) => (
              <Card key={product.id} article={product} addCart={updateCart} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
