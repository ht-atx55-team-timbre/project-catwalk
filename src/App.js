import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Box } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import theme from './theme.js';
import Header from './header-components/Header.jsx';
import ReviewsAndRatings from './reviews-components/ReviewsAndRatings';
import ProductOverview from './product-components/ProductOverview.jsx';
import Related from './related-components/Related';
import QA from './qa-components/Main.jsx';
import API_KEY from './config';

const App = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [product_id, setProduct_id] = useState(null);
  const [name, setName] = useState(null)

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products', {
      headers: {
        Authorization: API_KEY
      },
      params: {
        count: 10
      }
    })
      .then((products) => {
        setAllProducts(products.data);
        setProduct_id(products.data[0].id);
        setName(products.data[0].name);
      })
      .catch((err) => {
        console.log(err, 'error retrieving products from the database');
      });
  }, []);

  const handleProductChange = (id, name) => {
    setProduct_id(id);
    setName(name);
  }

  const onSearchFormSubmit = (event) => {
    event.preventDefault();
    const filteredProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(event.target.id.toLowerCase())
    );
    if (filteredProducts.length > 0) {
      const topResult = filteredProducts[0];
      setProduct_id(topResult.id);
    } else {
      alert('No products match your search criteria. Please search for a different product.');
    }
  }

  if (product_id) {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container direction='column'>
          <Header onSearchFormSubmit={onSearchFormSubmit} />
          <Grid item container direction='row'>
            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={10}>
              <ProductOverview allProducts={allProducts} product={product_id} />
            </Grid>
            <Grid item xs={false} sm={1} />
          </Grid>
          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <Box pt={3} pb={3}>
                <Divider varient='middle'></Divider>
              </Box>
              <Related product_id={product_id} handleIdChange={handleProductChange} />
              {/* Q/A */}
              <Box pt={3} pb={3}>
                <Divider varient='middle'></Divider>
              </Box>
              <QA product_id={product_id} name={name} />
              {/* Reviews/Ratings */}
              <Box pt={3} pb={6}>
                <Divider varient='middle'></Divider>
              </Box>
              <ReviewsAndRatings product_id={product_id} name={name} />
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    )
  } else {
    return <></>
  }
}

export default App;


