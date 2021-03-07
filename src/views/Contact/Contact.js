import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "./Contact.module.scss";
//TODO: import { Loader, LoaderOptions } from "google-maps";

const Contact = () => {
  // const options: LoaderOptions = {
  /* todo */
  // };
  // const loader = new Loader("my-api-key", options);

  // loader.load().then(function (google) {
  //   const map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // });
  return (
    <Grid>
      <h2 className={styles.menuSubtitle}>Contact</h2>
      <Row>
        <Col xs={12} sm={6}>
          map
        </Col>
        <Col xs={12} sm={6}>
          <p>
            Plant Shop
            <br />
            ul. Gardenstreet
            <br />
            NIP: ***
            <br />
            REGON: ***
            <br />
            tel.*** *** ***
          </p>
        </Col>
      </Row>
      <Row>
        <h3>If you have any questions, write to us!</h3>
      </Row>
      <Col className={styles.form} xs={12} sm={4} md={4}>
        <input type="text" placeholder="name" />
        <input type="mail" placeholder="mail" />
        <textarea
          name="message"
          id="1"
          cols="30"
          rows="10"
          placeholder="Your message"
        ></textarea>
      </Col>
    </Grid>
  );
};

export default Contact;
