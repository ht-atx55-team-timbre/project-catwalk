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
      product_id: -1
    }
  }

  componentDidMount() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products', {
      headers: {
        Authorization: API_KEY
      }
    })
      .then((products) => {
        this.setState({product_id: products.data[0].id})
      })
      .catch((err) => {
        console.log(err, 'error retrieving products from the database');
      })
  }

  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          {/* Header component will go here */}
          <h1>This will be the header</h1>
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <ProductOverview product={this.state.product_id}/>
            <h1>This will be for the Product Overview</h1>
            <Related />
            <h1>This will be for the Related Items</h1>
            {/* Q/A */}
            <QA product_id = {this.state.product_id} />
            {/* Reviews/Ratings */}
            <ReviewsAndRatings />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    )
  }
}

export default App;
