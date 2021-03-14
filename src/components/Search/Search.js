import React from "react";
import { Col } from "react-flexbox-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.scss";
import { connect } from "react-redux";
import { addSearhPhrase } from "../../actions";

const Search = (props) => {
  const { addSearchPhrase, searchString } = props;

  return (
    <Col className={styles.cart__btn} xs={12} sm={4} md={4} lg={2}>
      <input
        style={{
          width: "60%",
          outline: "none",
          border: "solid 1px lightgrey",
        }}
        value={searchString}
        type="text"
        placeholder="search"
        onChange={(event) => addSearchPhrase(event.target.value)}
      />
      <FontAwesomeIcon className={styles.icon} icon={faSearch} />
    </Col>
  );
};

const mapStateToProps = (state) => ({
  searchPhrase: state.searchPhrase,
});

const mapDispatchToProps = (dispatch) => ({
  addSearchPhrase: (currentValue) => dispatch(addSearhPhrase(currentValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
