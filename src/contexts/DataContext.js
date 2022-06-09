import { createContext, useContext, useEffect, useReducer } from "react";
import data from "../data.json";

const DataContext = createContext();

const initialState = {
  products: [],
  cart: [],
  saveForLater: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCTS":
      return { ...state, products: payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart].filter(
          (cartItem) => cartItem.id !== payload.productId
        ),
      };
    case "INC_QTY":
      return {
        ...state,
        cart: [...state.cart].map((cartItem) =>
          cartItem.id === payload.productId
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        ),
      };
    case "DEC_QTY":
      return {
        ...state,
        cart: [...state.cart].map((cartItem) =>
          cartItem.id === payload.productId
            ? { ...cartItem, qty: cartItem.qty - 1 }
            : cartItem
        ),
      };
    case "SAVE_FOR_LATER":
      return { ...state, saveForLater: [...state.saveForLater, payload] };
    case "REMOVE_FROM_SAVED":
      return {
        ...state,
        saveForLater: [...state.saveForLater].filter(
          (item) => item.id !== payload.productId
        ),
      };
    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: data });
  }, []);

  const addToCart = (id) => {
    const currentProduct = state.products.find((item) => item.id === id);

    dispatch({ type: "ADD_TO_CART", payload: currentProduct });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { productId: id } });
  };

  const updateProductQty = (id, operation) => {
    if (operation === "increment") {
      dispatch({ type: "INC_QTY", payload: { productId: id } });
    } else {
      dispatch({ type: "DEC_QTY", payload: { productId: id } });
    }
  };

  const saveProductForLater = (id) => {
    const currentProduct = state.products.find((item) => item.id === id);

    dispatch({ type: "SAVE_FOR_LATER", payload: currentProduct });
    removeFromCart(id);
  };

  const removeFromSaved = (id) => {
    dispatch({ type: "REMOVE_FROM_SAVED", payload: { productId: id } });
  };

  const addSavedToCart = (id) => {
    removeFromSaved(id);
    addToCart(id);
  };

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        updateProductQty,
        saveProductForLater,
        removeFromSaved,
        addSavedToCart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
