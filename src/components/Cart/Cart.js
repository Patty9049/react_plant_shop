import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { connect } from "react-redux";
import { setCartClose, deleteProductFromCart } from "../../actions";

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
    width: "40vw",
    borderRadius: "15px",
    overflow: "auto",
  },
}));

const Cart = ({ isCartOpen, setCartClose, cart, deleteProductFromCart }) => {
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
                <li key={productId}>
                  <img
                    style={{ width: "70px", height: "70px" }}
                    src={productImage}
                    alt={productName}
                  />
                  <h5>{productName}</h5>
                  <button>-</button>
                  <h5>{productQuantity}</h5>
                  <button>+</button>
                  <h5>{productPrice}$</h5>
                  <button onClick={()=> deleteProductFromCart(productId)}>x</button>
                </li>
              );
            })}
          </ul>
        </div>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  isCartOpen: state.isCartOpen,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  setCartClose: () => dispatch(setCartClose()),
  deleteProductFromCart: (productId) => dispatch(deleteProductFromCart(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
