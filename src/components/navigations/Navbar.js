import React from "react";
import styles from "./Navbar.scss";
import { routes } from "../../routes/";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

const Navbar = () => {
  return (
    <nav className={styles.component}>
      <Grid>
        <Row between="sm md">
          <Col xs={12} sm={4} md={4} lg={2}>
            <Link to={routes.home}>Home</Link>
            <Link to={routes.products}>Products</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </Col>
          <Col end xs={12} sm={4} md={4} lg={2}>
              <button className={styles.btn}>cart</button>
          </Col>
        </Row>
      </Grid>
    </nav>
  );
};

export default Navbar;
//czy jest potrzebna lista i elementy listy? czy nie wystarczą same linki?
// NavLink?
//czy układasz:
// - plan aplikacji?
// - plan komponentów?
// - plan pracy nad apką?
// czy mam przygotować widoki zakladek
