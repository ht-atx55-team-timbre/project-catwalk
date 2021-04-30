import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Divider, Box } from '@material-ui/core';
import API_KEY from '../config.js';

import ProductInfo from './ProductInfo.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductImages from './ProductImages.jsx';
import ProductStyles from './ProductStyles.jsx';
import ProductSpecs from './ProductSpecs.jsx';
import Cart from './AddToCart.jsx';

const ProductOverview = ({ product, allProducts }) => {
  const [productData, setProductData] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [styleData, setStyleData] = useState(null);
  const [initialPhoto, setInitialPhoto] = useState(0);

  const handleStyleChange = (newStyle, initial) => {
    setCurrentStyle(newStyle);
    setInitialPhoto(initial);
  }

  useEffect(() => {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${product}/styles`, {
        headers: {
          Authorization: API_KEY
        }
      })
      .then(response => {
        let styles = response.data.results;
        setStyleData(styles);
        for (var i = 0; i < styles.length; i++) {
          if (styles[i]['default?']) {
            setCurrentStyle(styles[i]);
          }
        }
      })
      .catch(err => console.error(err));

    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${product}`, {
        headers: {
          Authorization: API_KEY
        }
      })
      .then(response => {
        setProductData(response.data);
      })
      .catch(err => console.error(err));
  }, [product]);

  if (currentStyle && productData) {
    return (
      <Grid container direction="column">
        <Grid container direction="row">
          <Grid item xs={12} md={7}>
            <ProductImages images={currentStyle} initial={initialPhoto} justifyContent='flex-end' />
          </Grid>
          <Grid item md={1} />
          <Grid item container direction="row" xs={12} md={4}>
            <Grid item xs={12}>
              <ProductInfo
                product={productData}
                id={product}
                style={currentStyle}
              />
            </Grid>
            <Grid item xs={12}>
              <ProductStyles
                styles={styleData}
                handleStyleChange={handleStyleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Cart currentStyle={currentStyle} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item xs={12} sm={7}>
            <ProductDescription product={productData} />
          </Grid>
          <Grid item md={1}>
            <Box pt={1.75} >
              <Divider
                orientation='vertical'
                flexItem
                variant='middle'
                style={{
                  height: '85%',
                }}
              >
              </Divider>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <ProductSpecs features={productData.features} />
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return <></>;
  }
}

export default ProductOverview;