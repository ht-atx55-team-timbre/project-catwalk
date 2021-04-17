import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import API_KEY from '../config.js';
import ProductInfo from './ProductInfo.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductImages from './ProductImages.jsx';

export default class ProductOverview extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
      currentStyle: {}
    }
  }

  componentDidMount() {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${this.props.product}/styles`, {
        headers: {
          Authorization: API_KEY
        }
      })
      .then(response => {
        console.log(response);
        this.setState({
          currentProduct: response.data,
          currentStyle: response.data.results[0]
        })
      })
      .catch(err => {throw new Error(err)});
  }

  render() {
    console.log('props', this.props);
    return (
      <Grid container direction="column">
        <Grid container direction="row">
          <Grid item xs={12} sm={8}>
            <h5>This is where the main product image goes.</h5>
          </Grid>
          <Grid container item direction="column" xs={12} sm={4}>
            <Grid item xs={12}>
              <h5>This is where the product info will go (category/title/price, rating). </h5>
              <ProductInfo product={this.state.currentProduct} />
            </Grid>
            <Grid item xs={12}>
              <h5>This is where the avavilable styles to choose will go.</h5>
            </Grid>
            <Grid item xs={12}>
              <h5>This is where the cart component will go.</h5>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={12} sm={8}>
            <h5>This is where the product description will go.</h5>
            <ProductDescription product={this.state.currentProduct} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <h5>This is where the product specs will go.</h5>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

// css positioner to allow the float for preview pictures
// global state should include current product,