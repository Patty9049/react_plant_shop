import React from "react";
import { routes } from "../../routes/";
import { Row, Col } from "react-flexbox-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import styles from "./Logo.module.scss";
import { settings } from "../../utils/staticSettings";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Search from "../../components/Search/Search";

const Logo = () => {
  return (
    <Grid>
      <Row style={{ margin: "0 30px" }}>
        <Col xs={12} sm={8} md={8} lg={8}>
          <Link to={routes.home} className={styles.logo}>
            <Row>
              <h2>
                <FontAwesomeIcon icon={faLeaf} />
                {settings.shopName}
              </h2>
            </Row>
          </Link>
        </Col>
        <Search />
      </Row>
    </Grid>
  );
};

export default Logo;
