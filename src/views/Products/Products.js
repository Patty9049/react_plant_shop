import React from "react";
import { Grid , Row } from 'react-flexbox-grid';
import ProductsList from "../../components/ProductsLIst/ProductsList";


const Products = () => {
  return (
    <Grid>
      <h2>Products</h2>
      <Row sm={3} md={3} lg={3}>
        <ProductsList />
      </Row>
    </Grid>
  );
};

export default Products;
