import { useContext, useReducer, createContext, useEffect } from "react";
import cartItems from "./data";

import reducer from "./reducer";

import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (itemId) => {
    dispatch({ type: REMOVE, payload: { itemId } });
  };

  const increase = (itemId) => {
    dispatch({ type: INCREASE, payload: { itemId } });
  };

  const decrease = (itemId) => {
    dispatch({ type: DECREASE, payload: { itemId } });
  };

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, removeItem, increase, decrease }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
