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
  if (action.type == REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.itemId);
    return { ...state, cart: newCart };
  }

  if (action.type == INCREASE) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.itemId);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(action.payload.itemId, newItem);
    return { ...state, cart: newCart };
  }
  throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;
