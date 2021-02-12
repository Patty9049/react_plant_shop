import React from "react";
import { connect } from "react-redux";
import { Col } from 'react-flexbox-grid';

const ProductsList = ({ products }) => {
  return (
    <Col sm={3} md={3} lg={3}>
      {products.map((el) => {
        const { productId, productImage, productName, productPrice } = el;
        return (
          <div key={productId}>
            <img src={productImage} alt={productName} />
            <h4>{productName}</h4>
            <p>{productPrice}</p>
            <button>Add to cart</button>
          </div>
        );
      })}
    </Col>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductsList);
