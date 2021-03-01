import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <Grid>
      <h2 className={styles.menuSubtitle}>Contact</h2>
      <Row>
        <Col xs={12} sm={6}>
          adress
        </Col>
        <Col xs={12} sm={6}>
          map
        </Col>
      </Row>
      <Row className={styles.form}>form</Row>
    </Grid>
  );
};

export default Contact;
