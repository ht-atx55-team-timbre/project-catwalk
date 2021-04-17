import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import API_KEY from '../config.js';
import ProductInfo from './ProductInfo.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductImages from './ProductImages.jsx';
import ProductStyles from './ProductStyles.jsx';
import ProductSpecs from './ProductSpecs.jsx';

export default class ProductOverview extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      productData: null,
      styleData: {}
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
          styleData: response.data.results
        })
        console.log('hey from styles .get request', this.state.styleData);
      })
      .catch(err => console.error(err));

    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${this.props.product}`, {
        headers: {
          Authorization: API_KEY
        }
      })
      .then(response => {
        console.log(response);
        this.setState({
          productData: response.data,
        })
        console.log('hey from product .get request', this.state.productData);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Grid container direction="column">
        <Grid container direction="row">
          <Grid item xs={12} sm={8}>
            <h5>This is where the main product image goes.</h5>
          </Grid>
          <Grid container item direction="column" xs={12} sm={4}>
            <Grid item xs={12}>
              {this.state.productData ?
                <ProductInfo product={this.state.productData} />
                : null
              }
            </Grid>
            <Grid item xs={12}>
              {this.state.productData ?
                <ProductStyles styles={this.state.styleData} />
                : null
              }
            </Grid>
            <Grid item xs={12}>
              <h5>This is where the cart component will go.</h5>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={12} sm={8}>
            {this.state.productData ?
              <ProductDescription product={this.state.productData} />
              : null
            }
          </Grid>
          <Grid item xs={12} sm={4}>
          {this.state.productData ?
              <ProductSpecs product={this.state.productData.features} />
              : null
            }
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

// css positioner to allow the float for preview pictures
// global state should include current product,