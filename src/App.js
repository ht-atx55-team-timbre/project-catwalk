import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import ReviewsAndRatings from './reviews-components/ReviewsAndRatings';
import ProductOverview from './product-components/ProductOverview.jsx';
import Related from './related-components/Related';
import QA from './qa-components/Main.jsx';
import API_KEY from './config';


class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state = {
      product_id: null
    }
  }

  componentDidMount() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products', {
      headers: {
        Authorization: API_KEY
      }
    })
      .then((products) => {
        this.setState({ product_id: products.data[0].id })
      })
      .catch((err) => {
        console.log(err, 'error retrieving products from the database');
      })
  }

  render() {
    if (this.state.isUpdated) {
      return (
        <Grid container direction="column">
          <Grid container direction="row">
            <Grid item xs={12} sm={8}>
              <ProductImages images={this.state.styleData} onClick={this.handleStyleChange} />
            </Grid>
            <Grid item container direction="row" xs={12} sm={4}>
              <Grid item xs={12}>
                <ProductInfo product={this.state.productData} />
              </Grid>
              <Grid item xs={12}>
                <ProductStyles styles={this.state.styleData} onClick={this.handleStyleChange} />
              </Grid>
              <Grid item xs={12}>
                <Cart currentStyle={this.state.currentStyle} />
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={12} sm={8}>
              <ProductDescription product={this.state.productData} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ProductSpecs features={this.state.productData.features} />
            </Grid>
          </Grid>
        </Grid>
      );
    } else {
      return <></>
    }
  }
}

export default App;
