import "./CartSummary.css";
import { useData } from "../../contexts/DataContext";

export const CartSummary = () => {
  const {
    state: { cart },
  } = useData();

  const cartPrice = {
    totalPrice: cart.reduce(
      (accum, value) => Number(accum) + Number(value.price),
      0
    ),
    discountedPrice: cart.reduce(
      (accum, value) => Number(accum) + Number(value.discount),
      0
    ),
  };

  const totalDiscount = cartPrice.totalPrice - cartPrice.discountedPrice;

  return (
    <div className="cart-summary">
      <h3>
        <span>Cart Summary</span>: (<span>{cart.length}</span>)
      </h3>

      <div>
        <div>Total Price: &#8377;{cartPrice.totalPrice}</div>
        <div>Discount: &#8377;{totalDiscount}</div>
        <div>Discounted Price: &#8377;{cartPrice.discountedPrice}</div>
      </div>
    </div>
  );
};
