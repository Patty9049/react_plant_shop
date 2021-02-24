import React from "react";
import { Grid , Row } from 'react-flexbox-grid';
import { connect } from "react-redux";
import styles from "./Home.module.scss";


const Home = (props) => {
  return (
    <Grid>
      <h2 className={styles.menuSubtitle}>Home</h2>
      <Row >
        <div>
          <img className={styles.homeImg} src={props.home.imgSrc} alt="houseplants"/>
        </div>
      </Row>
      <Row>
        <h4 className={styles.menuSubtitle}> Lorem, ipsum dolor. </h4>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima molestiae dolore accusamus ullam fugiat odio iste repellendus architecto unde eius, debitis nostrum exercitationem, voluptatibus tempora doloribus quos. Sequi, facilis aperiam. </p>
      </Row>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  home: state.views.home,
});

export default  connect(mapStateToProps)(Home);
