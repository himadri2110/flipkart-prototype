import { Routes, Route } from "react-router-dom";
import { ProductListing } from "./../pages/ProductListing/ProductListing";
import { Cart } from "./../pages/Cart/Cart";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
