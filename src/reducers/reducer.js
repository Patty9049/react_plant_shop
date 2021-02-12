import { products } from "../localData/products";

const initialState = {
  products: [...products],
  cart: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default reducer;
