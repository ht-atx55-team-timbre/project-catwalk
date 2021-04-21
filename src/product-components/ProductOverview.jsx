import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import API_KEY from '../config.js';

import ProductInfo from './ProductInfo.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductImages from './ProductImages.jsx';
import ProductStyles from './ProductStyles.jsx';
import ProductSpecs from './ProductSpecs.jsx';
import Cart from './AddToCart.jsx';

export default class ProductOverview extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      productId: 24156,
      productData: null,
      currentStyle: null,
      styleData: null
    }
    this.handleStyleChange = this.handleStyleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${this.state.productId}/styles`, {
        headers: {
          Authorization: API_KEY
        }
      })
      .then(response => {
        // console.log(response);
        var styles = response.data.results;
        this.setState({
          styleData: styles,
        });
        for (var i = 0; i < styles.length; i++) {
          if (styles[i]['default?']) {
            this.setState({
              currentStyle: styles[i]
            })
          }
        }
        // console.log('.get styles data', this.state.styleData, this.state.currentStyle);
      })
      .catch(err => console.error(err));

    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${this.state.productId}`, {
        headers: {
          Authorization: API_KEY
        }
      })
      .then(response => {
        // console.log(response);
        this.setState({
          productData: response.data,
        })
        // console.log('.get product data', this.state.productData);
      })
      .catch(err => console.error(err));
  }

  handleStyleChange(event) {
    this.setState({
      currentStyle: 'placeholder: newStyle'
    })
  }

  render() {
    return (
      <Grid container direction="column">
        <Grid container direction="row">
          <Grid item xs={12} sm={8}>
            {this.state.styleData ?
              <ProductImages images={this.state.styleData} onClick={this.handleStyleChange} />
              : null
            }
          </Grid>
          <Grid item direction="row" xs={12} sm={4}>
            <Grid item xs={12}>
              {this.state.productData ?
                <ProductInfo product={this.state.productData} />
                : null
              }
            </Grid>
            <Grid item xs={12}>
              {this.state.styleData ?
                <ProductStyles styles={this.state.styleData} onClick={this.handleStyleChange} />
                : null
              }
            </Grid>
            <Grid item xs={12}>
              {this.state.currentStyle ?
                <Cart currentStyle={this.state.currentStyle} />
                : null
              }
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item xs={12} sm={8}>
            {this.state.productData ?
              <ProductDescription product={this.state.productData} />
              : null
            }
          </Grid>
          <Grid item xs={12} sm={4}>
            {this.state.productData ?
              <ProductSpecs features={this.state.productData.features} />
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