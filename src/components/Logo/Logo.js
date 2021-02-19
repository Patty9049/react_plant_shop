import React from 'react';
import { Row } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import styles from './Logo.modules.scss';
import { settings } from '../../utils/staticSettings';



const Logo = () => {
  return (
    <Row className={styles.logo}>
      <FontAwesomeIcon icon={faLeaf}/>
      <h2>{settings.shopName}</h2>
    </Row>
  )
}

export default Logo;
