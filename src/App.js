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

const App = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [product_id, setProduct_id] = useState(null);
  const [name, setName] = useState(null)

  useEffect(() => {
    axios.get('http://127.0.0.1:3004/products', {
      params: {
        count: 20
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

  const handleProductChange = (e, id, name) => {
    trackClicks(e, 'Related Card');
    setProduct_id(id);
    setName(name);
  }

  const onSearchFormSubmit = (event) => {
    event.preventDefault();
    if (event.target.id.length > 2) {
      let wordToCheck = event.target.id;

      if (wordToCheck.includes(':')) {
        const indexToSlice = wordToCheck.indexOf(':');
        wordToCheck = wordToCheck.slice(0, indexToSlice);
      }

      const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(wordToCheck.toLowerCase())
      );
      if (filteredProducts.length > 0) {
        const topResult = filteredProducts[0];
        setProduct_id(topResult.id);
      } else {
        alert('No products match your search criteria. Please search for a different product.');
      }
    } else {
      alert('No products match your search criteria. Please search for a different product.');
    }
  }

  const trackClicks = (e, widget) => {
    var timeStamp = new Date();
    console.log({ element: e.target, widget: widget, time: timeStamp });
    axios({
      method: 'post',
      url: `http://127.0.0.1:3004/interactions`,
      data: {
        element: e.target.toString(),
        widget: widget,
        time: timeStamp
      }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.error(err));
  };

  if (product_id) {
    return (
      <MuiThemeProvider theme={theme}>
        <Header allProducts={allProducts} onSearchFormSubmit={onSearchFormSubmit} track={trackClicks} />
        <Grid container direction='column'>
          <Grid item container direction='row'>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8} >
              <ProductOverview allProducts={allProducts} product={product_id} track={trackClicks} />
              {/* clickTracker done */}
            </Grid>
            <Grid item xs={false} sm={1} />
          </Grid>
          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <Box pt={3} pb={3}>
                <Divider varient='middle'></Divider>
              </Box>
              <Related product_id={product_id} handleIdChange={handleProductChange} track={trackClicks} />
              <Box pt={3} pb={3}>
                <Divider varient='middle'></Divider>
              </Box>
              <QA product_id={product_id} name={name} track={trackClicks} />
              <Box pt={3} pb={6}>
                <Divider varient='middle'></Divider>
              </Box>
              <ReviewsAndRatings product_id={product_id} name={name} track={trackClicks} />
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


