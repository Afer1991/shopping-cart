import Card from "../components/Card.jsx";
import styles from "../styles/ShopPage.module.css";
import { useState, useEffect } from "react";

const ShopPage = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        setProducts(data);
        return;
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div className={styles.cards}>
        {products.map((product) => {
          <Card
            key={product.id}
            image={product.image}
            name={product.title}
            price={"$" + product.price}
          />;
        })}
      </div>
    </>
  );
};

export default ShopPage;
