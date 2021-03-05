import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styles from "./Cart.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { connect } from "react-redux";
import {
  setCartClose,
  deleteProductFromCart,
  addQuantityToCart,
  deleteQuantityToCart,
} from "../../actions";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    height: "80vh",
    width: "70vw",
    borderRadius: "15px",
    overflow: "auto",
  },
}));

const Cart = ({
  isCartOpen,
  setCartClose,
  cart,
  deleteProductFromCart,
  cartTotal,
  addQuantityToCart,
  deleteQuantityToCart,
}) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isCartOpen}
      onClose={setCartClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isCartOpen}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title" style={{ textAlign: "center" }}>
            Your cart
          </h2>
          <ul>
            {cart.map((product) => {
              const {
                productId,
                productName,
                productQuantity,
                productPrice,
                productImage,
              } = product;
              return (
                <Row className={styles.cartProd} key={productId}>
                  <Col xs={12} sm={6} md={6} className={styles.cartCol1}>
                    <img
                      className={styles.cartProd_img}
                      style={{ width: "70px", height: "70px" }}
                      src={productImage}
                      alt={productName}
                    />
                    <h5 style={{ margin: "15px" }}>{productName}</h5>
                  </Col>
                  <Col xs={12} sm={6} md={6} className={styles.cartCol2}>
                    <button
                      className={styles.cartProd_btn}
                      onClick={() => deleteQuantityToCart(productId)}
                      disabled={productQuantity === 1 ? true : false}
                    >
                      -
                    </button>
                    <h5>{productQuantity}</h5>
                    <button
                      className={styles.cartProd_btn}
                      onClick={() => addQuantityToCart(productId)}
                    >
                      +
                    </button>
                    <h5>{productPrice}$</h5>
                    <button
                      className={styles.cartProd_btn}
                      onClick={() => deleteProductFromCart(productId)}
                    >
                      x
                    </button>
                  </Col>
                </Row>
              );
            })}
          </ul>
          <Col className={styles.cartTotal}>
            {cartTotal === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                <Link>order details</Link>
                <h2>total price {cartTotal}</h2>
              </>
            )}
          </Col>
        </div>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  isCartOpen: state.isCartOpen,
  cart: state.cart,
  cartTotal: state.cartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  setCartClose: () => dispatch(setCartClose()),
  deleteProductFromCart: (productId) =>
    dispatch(deleteProductFromCart(productId)),
  addQuantityToCart: (productId) => dispatch(addQuantityToCart(productId)),
  deleteQuantityToCart: (productId) =>
    dispatch(deleteQuantityToCart(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
