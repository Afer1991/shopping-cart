import { BrowserRouter, Routes, Route } from "react-router";
import ShopPage from "./pages/ShopPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Navigation from "./components/Navigation.jsx";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (quantity > 0) {
      const ckForDupes = cart.some((el) => {
        return el.id == product.id;
      });

      if (ckForDupes) {
        const removeDupes = cart.filter((el) => {
          return el.id !== product.id;
        });

        const findIndex = cart.findIndex((el) => {
          return el.id == product.id;
        });

        const existingQty = cart[findIndex].units;

        const noDupesCart = [
          ...removeDupes,
          {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            units: quantity + existingQty,
          },
        ];

        setCart(noDupesCart);
      } else {
        const updatedCart = [
          ...cart,
          {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            units: quantity,
          },
        ];
        setCart(updatedCart);
      }
    }
  };

  const removeItem = (id) => {
    const removeFromCart = cart.filter((el) => {
      return el.id !== id;
    });

    setCart(removeFromCart);
  };

  const wipeOutCart = () => {
    setCart([]);
  };

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage updateCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                existingCart={cart}
                updateCart={removeItem}
                removeCart={wipeOutCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
