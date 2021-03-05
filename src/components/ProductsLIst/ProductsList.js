import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-flexbox-grid";
import styles from "./ProductsList.module.scss";
import {
  addProductToCart,
  addQuantityToCart,
  openSingleProduct,
} from "../../actions";
import { Link } from "react-router-dom";

const ProductsList = ({
  products,
  addProductToCart,
  addQuantityToCart,
  deleteQuantityToCart,
  cart,
}) => {
  const handleAdd = (productId) => {
    if (cart.find((product) => product.productId === productId)) {
      addQuantityToCart(productId);
    } else {
      addProductToCart(productId);
    }
  };
  return (
    <Row>
      {products.map((product) => {
        const { productId, productImage, productName, productPrice } = product;
        console.log("PRODUCT", product);

        return (
          <Col
            key={productId}
            sm={4}
            md={4}
            lg={4}
            className={styles.colprod_wrapper}
          >
            <div className={styles.productImg__wrapper}>
              <Link
                to={{
                  pathname: `/product/${productName}`,
                  state: { ...product },
                }}
              >
                <img
                  src={productImage}
                  alt={productName}
                  className={styles.product__img}
                  onClick={openSingleProduct(productId)}
                />
                <h2 className={styles.img_hoverNote}>read more</h2>
              </Link>
            </div>
            <div className={styles.productCont_wrapper}>
              <h4>{productName}</h4>
              <p>
                {productPrice}
                <span>$</span>
              </p>
              <button
                onClick={() => handleAdd(productId)}
                className={styles.btn_basicGreenHover}
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
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (productId) => dispatch(addProductToCart(productId)),
  addQuantityToCart: (productId) => dispatch(addQuantityToCart(productId)),
  openSingleProduct: (productId) => dispatch(openSingleProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
