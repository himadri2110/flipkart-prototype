import "./ProductCard.css";
import { useData } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { id, title, brand, image, discount, price } = product;

  const { state, addToCart } = useData();
  const navigate = useNavigate();
  const foundInCart = state.cart.find((cartItem) => cartItem.id === id);

  return (
    <div className="product-card">
      <img src={image} alt={title} />

      <div className="product-brand">{brand}</div>

      <div>{title}</div>

      <div className="product-price">
        <span className="discount">&#8377;{discount}</span>
        <span className="price">&#8377;{price}</span>
      </div>

      <button onClick={() => (foundInCart ? navigate("/cart") : addToCart(id))}>
        {foundInCart ? "Go" : "Add"} to Cart
      </button>
    </div>
  );
};
