import svg from "../assets/react.svg";

const Card = () => {
  return (
    <div>
      <img src={svg} alt="logo" />
      <h1>Name</h1>
      <p>$10</p>
      <form>
        <div>
          <button type="button">-</button>
          <input type="number" />
          <button type="button">+</button>
        </div>
        <button>Add to Cart</button>
      </form>
    </div>
  );
};

export default Card;
