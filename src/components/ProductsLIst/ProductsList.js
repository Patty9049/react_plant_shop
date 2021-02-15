import React from "react";
import { connect } from "react-redux";
import { Row , Col } from 'react-flexbox-grid';
import styles from './ProductsList.module.scss'

const ProductsList = ({ products }) => {
  return (
    <Row>
      {products.map((el) => {
        const { productId, productImage, productName, productPrice } = el;
        return (
          <Col key={productId} sm={4} md={4} lg={4} className={styles.colprod_wrapper}>
            <div className={styles.productImg__wrapper}>
              <img src={productImage} alt={productName} className={styles.product__img}/>
            </div>
            <div className={styles.productCont_wrapper}>
              <h4>{productName}</h4>
              <p>{productPrice}<span>$</span></p>
              <button className={styles.productContBtn}>Add to cart</button>
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

export default connect(mapStateToProps)(ProductsList);
