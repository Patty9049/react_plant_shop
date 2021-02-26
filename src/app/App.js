import React, { Component } from "react";
import Router from "../routing/Router";
import { connect } from "react-redux";
import { calculateCartTotal } from "../actions";

class App extends Component {
  calculateCartTotal = () => {
    let total = 0;
    this.props.cart.forEach((el) => {
      total = total + el.productPrice * el.productQuantity;
    });

    this.props.calculateCartTotalAction(total);
    console.log(total);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cart !== this.props.cart) {
      this.calculateCartTotal();
    }
  }

  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  calculateCartTotalAction: (total) => dispatch(calculateCartTotal(total)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
