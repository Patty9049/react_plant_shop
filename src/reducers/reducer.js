import { actionsTypes } from "../actions/actionsTypes";
import { productsLocalData } from "../localData/products";

const initialState = {
  products: [...productsLocalData],
  cart: [],
  isCartOpen: false,
  cartTotal: 0,
  singleProductId: 0,
  searchPhrase: "",
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
      const productToAdd = productsLocalData.find(
        (product) => product.productId === payload
      );

      return {
        ...state,
        cart: [...state.cart, productToAdd],
      };

    case actionsTypes.ADD_QUANTITY_TO_CART:
      const mappedCart = state.cart.map((product) => {
        if (product.productId === payload) {
          product.productQuantity += 1;
        }
        return product;
      });

      return {
        ...state,
        cart: [...mappedCart],
      };

    case actionsTypes.DELETE_QUANTITY_TO_CART:
      const cartAfterDelQuantity = state.cart.map((product) => {
        if (product.productId === payload) {
          product.productQuantity -= 1;
        }
        return product;
      });

      return {
        ...state,
        cart: [...cartAfterDelQuantity],
      };

    case actionsTypes.DELETE_PRODUCT_FROM_CART:
      const cartAfterProductDeleted = state.cart.filter((product) => {
        if (product.productId === payload) {
          product.productQuantity = 1;
        }
        return product.productId !== payload;
      });

      return {
        ...state,
        cart: [...cartAfterProductDeleted],
      };
    case actionsTypes.CALCULATE_CART_TOTAL:
      return {
        ...state,
        cartTotal: payload,
      };

    case actionsTypes.OPEN_SINGLE_PRODUCT:
      return {
        ...state,
        singleProductId: payload,
      };

    case actionsTypes.ADD_SEARCHPHRASE:
      return {
        ...state,
        searchPhrase: payload,
      };

    case actionsTypes.FILTER_PRODUCTS_BY_NAME:
      let filteredProducts = [...productsLocalData];

      if (state.searchPhrase.length !== 0) {
        filteredProducts = productsLocalData.filter((product) => {
          const lowerCaseProductName = product.productName.toLowerCase();
          const inputValueLowerCase = state.searchPhrase.toLowerCase();

          return (
            inputValueLowerCase ===
            lowerCaseProductName.slice(0, inputValueLowerCase.length)
          );
        });
      }

      return {
        ...state,
        products: [...filteredProducts],
      };

    default:
      return state;
  }
};

export default reducer;
