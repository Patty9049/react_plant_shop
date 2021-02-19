import React from "react";
import { Grid , Row, Col } from 'react-flexbox-grid';
import { connect } from "react-redux";
import styles from "./Home.module.scss";


const Home = (props) => {
  console.log('HOME PROPS', props);
  return (
    <Grid>
      <h2 className={styles.menuSubtitle}>Home</h2>
      <Row sm={3} md={3} lg={3}>
        <Col>
          <img className={styles.homeImg} src={props.home.imgSrc} alt="houseplants"/>
        </Col>
      </Row>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  home: state.views.home,
});

export default  connect(mapStateToProps)(Home);
