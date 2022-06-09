import { useData } from "../../contexts/DataContext";

export const CartCard = ({ product }) => {
  const { id, title, brand, image, discount, price, qty } = product;

  const { removeFromCart, updateProductQty, saveProductForLater } = useData();

  return (
    <div className="product-card">
      <img src={image} alt={title} />

      <div className="product-brand">{brand}</div>

      <div>{title}</div>

      <div className="product-price">
        <span className="discount">&#8377;{discount}</span>
        <span className="price">&#8377;{price}</span>
      </div>

      <button onClick={() => removeFromCart(id)}>Remove</button>

      <div>
        <button onClick={() => updateProductQty(id, "increment")}>+</button>
        <span>{qty}</span>
        <button onClick={() => updateProductQty(id, "decrement")}>-</button>
      </div>

      <button onClick={() => saveProductForLater(id)}>Save for later</button>
    </div>
  );
};
