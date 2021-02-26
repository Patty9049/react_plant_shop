import React from "react";
import { routes } from "../../routes/";
import { NavLink } from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from "./Navbar.module.scss";
import { setCartOpen } from "../../actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({setCartOpen}) => {
  return (
    <nav className={styles.navList__wrapper}>
      <Grid>
        <Row between="sm">
          <Col className={styles.navMenu__wrapper} xs={12} sm={6} md={6} lg={4}>
            <NavLink to={routes.home}>Home</NavLink>
            <NavLink to={routes.products}>Products</NavLink>
            <NavLink to={routes.about}>About</NavLink>
            <NavLink to={routes.contact}>Contact</NavLink>
          </Col>
          <Col className={styles.navCart__wrapper} xs={12} sm={4} md={4} lg={2}>
              <button onClick={setCartOpen} className={styles.cart__btn}><FontAwesomeIcon icon={faShoppingCart}/></button>
          </Col>
        </Row>
      </Grid>
    </nav>
  );
};


const mapDispatchToProps = (dispatch) => ({
  setCartOpen: () => dispatch(setCartOpen())
})


export default connect( null, mapDispatchToProps)(Navbar);

