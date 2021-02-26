import React from 'react';
import { Grid, Col } from "react-flexbox-grid";
import styles from './About.module.scss';

const About = () => {
  return (
    // <div>
    //   <h2 className={styles.menuSubtitle}>About</h2>
    // </div>
    <Grid>
      <Col>
        <h2 className={styles.menuSubtitle}>About</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eaque quam commodi cupiditate repellendus quasi qui quidem similique delectus. Officia vel voluptate, autem dignissimos iure qui itaque, ab blanditiis vitae, nostrum esse odit error laudantium distinctio excepturi possimus odio non! Eveniet repellat necessitatibus eligendi impedit fugiat ex dicta doloribus at! </p>
        <img className={styles.subpageImg} src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="ground on the table and spatula"/>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil qui magni iusto praesentium excepturi corrupti unde aliquid iste sequi, commodi ipsam adipisci assumenda officiis ratione vel ipsa voluptates rerum ea pariatur deserunt. Animi impedit modi in! Aperiam veniam non sit, doloremque corrupti nobis facilis voluptas nemo consectetur eius hic! </p>
      </Col>
    </Grid>
  )
}

export default About;
