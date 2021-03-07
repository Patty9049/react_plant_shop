import React from "react";
import { routes } from "../../routes/";
import { Row, Col } from "react-flexbox-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Logo.module.scss";
import { settings } from "../../utils/staticSettings";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

const Logo = () => {
  return (
    <Grid>
      <Row>
        <Col xs={12} sm={6} md={6} lg={4}>
          <Link to={routes.home} className={styles.logo}>
            <Row>
              <h2>
                <FontAwesomeIcon icon={faLeaf} />
                {settings.shopName}
              </h2>
            </Row>
          </Link>
        </Col>
        <Col xs={12} sm={4} md={4} lg={2}>
          <Row className={styles.cart__btn}>
            <input style={{ width: "40%" }} type="text" placeholder="search" />
            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};

export default Logo;
