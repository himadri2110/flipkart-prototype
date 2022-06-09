import "./ProductListing.css";
import { useData } from "../../contexts/DataContext";
import { ProductCard } from "./../../components/ProductCard/ProductCard";

export const ProductListing = () => {
  const {
    state: { products },
  } = useData();

  return (
    <div>
      <h2>
        <span>Products:</span> (<span>{products.length}</span>)
      </h2>

      <div className="product-listing">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
