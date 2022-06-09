import { useData } from "../../contexts/DataContext";

export const SaveForLater = () => {
  const {
    state: { saveForLater },
    removeFromSaved,
    addSavedToCart,
  } = useData();

  return (
    <div className="product-listing">
      {saveForLater.map((item) => {
        const { id, title, brand, image, discount } = item;

        return (
          <div key="item.id" className="product-card">
            <img src={image} alt={title} />
            <div>{brand}</div>
            <div>{title}</div>
            <div>&#8377; {discount}</div>
            <button onClick={() => removeFromSaved(id)}>Remove</button>
            <button onClick={() => addSavedToCart(id)}>Move to Cart</button>
          </div>
        );
      })}
    </div>
  );
};
