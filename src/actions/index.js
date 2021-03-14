import { actionsTypes } from "./actionsTypes";

export const setCartOpen = () => ({
  type: actionsTypes.SET_CART_OPEN,
});

export const setCartClose = () => ({
  type: actionsTypes.SET_CART_CLOSE,
});

export const addProductToCart = (productId) => ({
  type: actionsTypes.ADD_PRODUCT_TO_CART,
  payload: productId,
});

export const addQuantityToCart = (productId) => ({
  type: actionsTypes.ADD_QUANTITY_TO_CART,
  payload: productId,
});

export const deleteQuantityToCart = (productId) => ({
  type: actionsTypes.DELETE_QUANTITY_TO_CART,
  payload: productId,
});

export const deleteProductFromCart = (productId) => ({
  type: actionsTypes.DELETE_PRODUCT_FROM_CART,
  payload: productId,
});

export const calculateCartTotal = (total) => ({
  type: actionsTypes.CALCULATE_CART_TOTAL,
  payload: total,
});

export const openSingleProduct = (productId) => ({
  type: actionsTypes.OPEN_SINGLE_PRODUCT,
  payload: productId,
});

export const addSearhPhrase = (currentValue) => ({
  type: actionsTypes.ADD_SEARCHPHRASE,
  payload: currentValue,
});

export const filteredProductsByName = () => ({
  type: actionsTypes.FILTER_PRODUCTS_BY_NAME,
});
