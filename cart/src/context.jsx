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
import { getTotals } from "./utils";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { totalAmount, totalCost } = getTotals(state.cart);

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

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const resp = await fetch(url);
    const data = await resp.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { data } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
