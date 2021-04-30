import React, { useState, useEffect } from 'react';
import { Grid, Divider, Box } from '@material-ui/core';
import request from './OverviewRequests.js';

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
    async function getStyles() {
      const response = await request.get(`/products/${product}/styles`);
      let styles = response.data.results;
      setStyleData(styles);
      for (var i = 0; i < styles.length; i++) {
        if (styles[i]['default?']) {
          setCurrentStyle(styles[i]);
        }
      }
    }

    async function getProducts() {
      const response = await request.get(`/products/${product}`);
      setProductData(response.data);
    }

    getProducts();
    getStyles();
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