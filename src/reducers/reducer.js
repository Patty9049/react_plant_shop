import { actionsTypes } from "../actions/actionsTypes";
import { products } from "../localData/products";

const initialState = {
  products: [...products],
  cart: [],
  isCartOpen: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case actionsTypes.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: true
      }

      case actionsTypes.SET_CART_CLOSE:
        return {
          ...state,
          isCartOpen: false
        }

    default:
      return state;
  }
};

export default reducer;
