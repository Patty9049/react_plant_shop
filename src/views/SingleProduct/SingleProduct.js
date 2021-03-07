import React from "react";
import styles from "./SingleProduct.module.scss";
import { Grid, Row, Col } from "react-flexbox-grid";
// import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRuler, faStar, faTruck } from "@fortawesome/free-solid-svg-icons";

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
            <p>
              STARS
              <span>
                <FontAwesomeIcon className={styles.iconSP} icon={faStar} />
                <FontAwesomeIcon className={styles.iconSP} icon={faStar} />
                <FontAwesomeIcon className={styles.iconSP} icon={faStar} />
                <FontAwesomeIcon className={styles.iconSP} icon={faStar} />
              </span>
            </p>
            <p>PRICE</p>
            <p>$</p>
          </Row>
          <Row>
            <p>
              SHIPPING
              <span>
                <FontAwesomeIcon className={styles.iconSP} icon={faTruck} />
              </span>
            </p>
            <label for="cars">OPTIONS:</label>
            <select id="options" name="options">
              <option value="option">option1</option>
              <option value="option">option2</option>
              <option value="option">option3</option>
            </select>
          </Row>
          <Row>
            <p>
              SIZE
              <span>
                <FontAwesomeIcon className={styles.iconSP} icon={faRuler} />
              </span>
            </p>
            <label for="cars">SIZES:</label>
            <select id="options" name="options">
              <option value="size">size1</option>
              <option value="size">size2</option>
              <option value="size">size3</option>
            </select>
          </Row>
          <button
            //TODO: onClick={() => handleAdd(productId)}
            className={styles.btn_basicGreenHover}
          >
            Add to cart
          </button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam
            eum, ducimus aliquam inventore sit odio voluptate, neque, voluptatum
            provident in quis. Tempore tenetur nesciunt tempora ea eaque
            reprehenderit, voluptate dicta, unde nostrum odio, ut architecto
            ullam itaque fugiat perspiciatis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam
            eum, ducimus aliquam inventore sit odio voluptate, neque, voluptatum
            provident in quis.
          </p>
        </Col>
      </Row>
      <h2>RECOMMANDED PRODUCTS</h2>
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
