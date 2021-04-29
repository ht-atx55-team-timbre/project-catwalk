import React from 'react';
import axios from 'axios';
import { Grid, Box } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import theme from './theme.js';
import Header from './product-components/Header.jsx';
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
      product_id: null,
      name: null
    }

    this.handleProductChange = this.handleProductChange.bind(this);
  }

  componentDidMount() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products', {
      headers: {
        Authorization: API_KEY
      }
    })
      .then((products) => {
        this.setState({ product_id: products.data[0].id });
        this.setState({ name: products.data[0].name });
      })
      .catch((err) => {
        console.log(err, 'error retrieving products from the database');
      })
  }

  handleProductChange(id, name) {
    this.setState({ product_id: id, name: name });
  }

  render() {
    if (this.state.product_id) {
      return (
        <MuiThemeProvider theme={theme}>
          <Grid container={true} direction='column'>
            <Header />
            <Grid item={true} container={true} direction='row'>
              <Grid item={true} xs={false} sm={1} />
              <Grid item={true} xs={12} sm={10}>
                <ProductOverview product={this.state.product_id} />
              </Grid>

              <Grid item={true} xs={false} sm={1} />
            </Grid>
            <Grid item={true} container={true}>
              <Grid item={true} xs={false} sm={2} />
              <Grid item={true} xs={12} sm={8}>
                <Box pt={3} pb={3}>
                  <Divider varient='middle'></Divider>
                </Box>
                <Related product_id={this.state.product_id} handleIdChange={this.handleProductChange} />
                {/* Q/A */}
                <Box pt={3} pb={3}>
                  <Divider varient='middle'></Divider>
                </Box>
                <QA product_id={this.state.product_id} name={this.state.name} />
                {/* Reviews/Ratings */}
                <Box pt={3} pb={6}>
                  <Divider varient='middle'></Divider>
                </Box>
                <ReviewsAndRatings product_id={this.state.product_id} name={this.state.name} />
              </Grid>
              <Grid item={true} xs={false} sm={2} />
            </Grid>
          </Grid>
        </MuiThemeProvider>

      )
    } else {
      return <></>
    }
  }
}

export default App;


