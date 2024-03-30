import "./Cart.css";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { useData } from "../../contexts/DataContext";
import { CartCard } from "./../../components/CartCard/CartCard";
import { SaveForLater } from "./../../components/SaveForLater/SaveForLater";

export const Cart = () => {
  const {
    state: { cart, saveForLater },
  } = useData();

  // Dummy commit

  return (
    <div>
      <h2>
        <span>Cart</span>: (<span>{cart.length}</span>)
      </h2>

      <div>
        {cart.length ? (
          <div className="cart-container">
            <div className="product-listing">
              {cart.map((cartItem) => (
                <CartCard product={cartItem} key={cartItem.id} />
              ))}
            </div>

            <CartSummary />
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      {saveForLater.length ? (
        <div>
          <h2>Saved For Later</h2>
          <SaveForLater />
        </div>
      ) : null}
    </div>
  );
};
