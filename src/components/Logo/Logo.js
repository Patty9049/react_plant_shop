import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import styles from './Logo.module.scss';
import { settings } from '../../utils/staticSettings';



const Logo = () => {
  return (
    <Row className={styles.logo}>
      <Col xs={12} sm={4} md={4} lg={2}>
        <FontAwesomeIcon icon={faLeaf}/>
        <h2>{settings.shopName}</h2>
      </Col>
    </Row>
  )
}

export default Logo;
