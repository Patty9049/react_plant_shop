import React from "react";
import { Grid , Row } from 'react-flexbox-grid';
import ProductsList from "../../components/ProductsLIst/ProductsList";


const Products = () => {
  return (
    <Grid>
      <h2>Products</h2>
      <Row>
        <ProductsList />
      </Row>
    </Grid>
  );
};

export default Products;
