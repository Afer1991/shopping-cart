const CartItem = ({ article }) => {
  return (
    <div>
      <div>
        <img src={article.image} />
      </div>
      <div>
        <h1>{article.title}</h1>
        <p>Price: ${article.price}</p>
        <p>Total: ${article.price * article.units}</p>
        <div>
          <button>-</button>
          <input type="text" />
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
