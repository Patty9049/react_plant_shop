import React from "react";
import { connect } from "react-redux";

const ProductsList = ({ products }) => {
  return (
    <ul>
      {products.map((el) => {
        const { productId, productImage, productName, productPrice } = el;
        return (
          <li key={productId}>
            <img src={productImage} alt={productName} />
            <h4>{productName}</h4>
            <p>{productPrice}</p>
            <button>Add to cart</button>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductsList);
