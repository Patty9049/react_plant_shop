import { actionsTypes } from "../actions/actionsTypes";
import { products } from "../localData/products";

const initialState = {
  products: [...products],
  cart: [],
  isCartOpen: false,
  cartTotal: 0,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: true,
      };

    case actionsTypes.SET_CART_CLOSE:
      return {
        ...state,
        isCartOpen: false,
      };

    case actionsTypes.ADD_PRODUCT_TO_CART:
      const productToAdd = state.products.find(
        (product) => product.productId === payload
      );

      return {
        ...state,
        cart: [...state.cart, productToAdd],
      };


      case actionsTypes.DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.productId !== payload)

      }
    default:
      return state;
  }
};

export default reducer;
