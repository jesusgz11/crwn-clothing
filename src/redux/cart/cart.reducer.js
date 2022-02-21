import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart, clearCartItem } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  const { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM, REMOVE_ITEM, CLEAR_CART } =
    CartActionTypes;
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    case CLEAR_ITEM:
      return {
        ...state,
        cartItems: clearCartItem(state.cartItems, payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
