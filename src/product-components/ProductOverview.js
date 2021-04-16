import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
// import sunilAPI from '../sunilConfig';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';

export default class ProductOverview extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: {}
    }
  }

  // componentDidMount() {
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products`, {
  //     headers: {
  //       Authorization: sunilAPI
  //     }
  //   })
  //     .then(response => {
  //       console.log(response);
  //       this.setState({
  //         products: response.data,
  //         currentProduct: response.data[0]
  //       })
  //     })
  // }

  render() {
    return (
      <Grid container direction="column">
        <Grid container direction="row">
          <Grid item xs={12} md={8}>
            <h5>This is where the main product image goes.</h5>
          </Grid>
          <Grid container direction="column" xs={12} md={4}>
            <Grid item xs={12}>
              <h5>This is where the product info will go (category/title/price, rating). </h5>
              <ProductInfo product={this.state.currentProduct}/>
            </Grid>
            <Grid item xs={12}>
              <h5>This is where the avavilable styles to choose will go.</h5>
            </Grid>
            <Grid item xs={12}>
              <h5>This is where the cart component will go.</h5>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item xs={12} md={8}>
            <h5>This is where the product description will go.</h5>
          </Grid>
          <Grid item xs={12} md={4}>
            <h5>This is where the product specs will go.</h5>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

// css positioner to allow the float for preview pictures
// global state should include current product,