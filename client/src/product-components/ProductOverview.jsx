import React, { useState, useEffect } from 'react';
import { Grid, Divider, Box } from '@material-ui/core';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductImages from './ProductImages.jsx';
import ProductStyles from './ProductStyles.jsx';
import ProductSpecs from './ProductSpecs.jsx';
import Cart from './AddToCart.jsx';

const ProductOverview = ({ product, allProducts, track }) => {
  const [productData, setProductData] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [styleData, setStyleData] = useState(null);

  const handleStyleChange = (newStyle, initial) => {
    setCurrentStyle(newStyle);
  }

  useEffect(() => {
    axios
      .get(`/products/${product}/styles`)
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
      .get(`/products/${product}`)
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
            <ProductImages
              images={currentStyle}
              track={track}
              justifyContent='flex-end'
            />
          </Grid>
          <Grid item md={1} />
          <Grid item container direction="row" xs={12} md={4}>
            <Grid item xs={12}>
              <ProductInfo
                product={productData}
                id={product}
                style={currentStyle}
                track={track}
              />
            </Grid>
            <Grid item xs={12}>
              <ProductStyles
                styles={styleData}
                handleStyleChange={handleStyleChange}
                track={track}
              />
            </Grid>
            <Grid item xs={12}>
              <Cart
                currentStyle={currentStyle}
                track={track}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item xs={12} sm={7}>
            <ProductDescription
              product={productData}
            />
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