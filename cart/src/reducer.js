import { act } from "react";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

const reducer = (state, action) => {
  if (action.type == CLEAR_CART) return { ...state, cart: new Map() };
};

export default reducer;
