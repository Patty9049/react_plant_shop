import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-flexbox-grid";
import styles from "./ProductsList.module.scss";
import { addProductToCart } from "../../actions";
import { Link } from "react-router-dom";

const ProductsList = ({ products, addProductToCart }) => {
  return (
    <Row>
      {products.map((el) => {
        const { productId, productImage, productName, productPrice } = el;
        return (
          <Col
            key={productId}
            sm={4}
            md={4}
            lg={4}
            className={styles.colprod_wrapper}
          >
            <div className={styles.productImg__wrapper}>
              <Link to={`/product/${productName}`}>
              <img
                src={productImage}
                alt={productName}
                className={styles.product__img}
              />
              </Link>
           
            </div>
            <div className={styles.productCont_wrapper}>
              <h4>{productName}</h4>
              <p>
                {productPrice}
                <span>$</span>
              </p>
              <button
                onClick={() => addProductToCart(productId)}
                className={styles.productContBtn}
              >
                Add to cart
              </button>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (productId) => dispatch(addProductToCart(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
