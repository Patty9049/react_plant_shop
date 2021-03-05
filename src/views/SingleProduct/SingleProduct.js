import React from "react";
import styles from "./SingleProduct.module.scss";
import { Grid, Row, Col } from "react-flexbox-grid";

const SingleProduct = (props) => {
  console.log("SINGLEPRODUCT", props);
  // const { productName, productImage } = props.location.state;
  // console.log("NAME", productName);
  // console.log("IMAGE", productImage);

  return (
    <Grid>
      <Row>
        <Col xs={12} sm={4} md={4}>
          <img
            className={styles.singleProduct__img}
            src={
              "https://images.unsplash.com/photo-1569171181682-2c689e08141d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
            }
            alt={"TREE"}
          />
        </Col>
        <Col xs={12} sm={8} md={8}>
          <h2>NAME</h2>
          <Row>
            <p>STARS</p>
            <p>PRICE</p>
          </Row>
          <Row>
            <p>SHIPPING</p>
            <p>OPTIONS</p>
          </Row>
          <Row>
            <p>SIZE</p>
            <p>SIZE GIUDE</p>
          </Row>
          <Row>BUTTON-addToCart</Row>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam
            eum, ducimus aliquam inventore sit odio voluptate, neque, voluptatum
            provident in quis. Tempore tenetur nesciunt tempora ea eaque
            reprehenderit, voluptate dicta, unde nostrum odio, ut architecto
            ullam itaque fugiat perspiciatis?
          </p>
        </Col>
      </Row>
      <p>RECOMMANDED PRODUCTS</p>
      <Row>
        <Col xs={12} sm={4} md={4}>
          <img
            className={styles.singleProduct__img}
            src={
              "https://images.unsplash.com/photo-1569171181682-2c689e08141d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
            }
            alt={"TREE"}
          />
        </Col>
        <Col xs={12} sm={4} md={4}>
          <img
            className={styles.singleProduct__img}
            src={
              "https://images.unsplash.com/photo-1569171181682-2c689e08141d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
            }
            alt={"TREE"}
          />
        </Col>
        <Col xs={12} sm={4} md={4}>
          <img
            className={styles.singleProduct__img}
            src={
              "https://images.unsplash.com/photo-1569171181682-2c689e08141d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
            }
            alt={"TREE"}
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default SingleProduct;
