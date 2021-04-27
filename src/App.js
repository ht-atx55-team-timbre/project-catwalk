import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Header from './product-components/Header.jsx';
import ReviewsAndRatings from './reviews-components/ReviewsAndRatings';
import ProductOverview from './product-components/ProductOverview.jsx';
import Related from './related-components/Related';
import QA from './qa-components/Main.jsx';
import API_KEY from './config';
import { ThemeProvider } from '@material-ui/core/styles';
import customTheme from './theme';

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
    // axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${id}`, {
    //   headers: {
    //     Authorization: API_KEY
    //   }
    // })
    //   .then((product) => {
    //     this.setState({ product_id: product.data.id });
    //     this.setState({ name: product.data.name})
    //   })
    //   .catch((err) => {
    //     console.log(err, 'error retrieving products from the database');
    //   })
    console.log(id, name);
    this.setState({ product_id: id, name: name});
  }

  render() {
    if (this.state.product_id) {
      return (
        <ThemeProvider theme={customTheme}>
          <Grid container direction='column'>
            <Grid container direction='row'>
              <Grid item xs={false} sm={1} />
              <Grid item xs={12} sm={10}>
                <Header />
              </Grid>
              <Grid item xs={false} sm={1} />
            </Grid>
            <Grid item container direction='row'>
              <Grid item xs={false} sm={1} />
              <Grid item xs={12} sm={10}>
                <ProductOverview product={this.state.product_id} />
              </Grid>
              <Grid item xs={false} sm={1} />
            </Grid>
            <Grid item container>
              <Grid item xs={false} sm={2} />
              <Grid item xs={12} sm={8}>
                <Related product_id={this.state.product_id} handleIdChange={this.handleProductChange} />
                <h1>This will be for the Related Items</h1>
                {/* Q/A */}
                <QA product_id={this.state.product_id} name={this.state.name} />
                {/* Reviews/Ratings */}
                <ReviewsAndRatings product_id={this.state.product_id} name={this.state.name}/>
              </Grid>
              <Grid item xs={false} sm={2} />
            </Grid>
          </Grid>
        </ThemeProvider>
      )
    } else {
      return <></>
    }
  }
}

export default App;
