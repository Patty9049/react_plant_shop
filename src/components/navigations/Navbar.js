import React from "react";
import { routes } from "../../routes/";
import { NavLink } from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from "./Navbar.module.scss";
import { setCartOpen } from "../../actions";
import { connect } from "react-redux";
const Navbar = ({setCartOpen}) => {
  return (
    <nav className={styles.navigationList__wrapper}>
      <Grid>
        <Row between="sm">
          <Col xs={12} sm={4} md={4} lg={2}>
            <NavLink to={routes.home}>Home</NavLink>
            <NavLink to={routes.products}>Products</NavLink>
            <NavLink to="#">About</NavLink>
            <NavLink to="#">Contact</NavLink>
          </Col>
          <Col xs={12} sm={4} md={4} lg={2}>
              <button onClick={setCartOpen}  className={styles.cart__btn}>cart</button>
          </Col>
        </Row>
      </Grid>
    </nav>
  );
};


const mapDispatchToProps = (dispatch) => ({
  setCartOpen: () => dispatch(setCartOpen())
})


export default connect(null,mapDispatchToProps) (Navbar);
//czy układasz:
// - plan aplikacji
// - plan komponentów
// - plan pracy nad apką
// przygotować widoki
