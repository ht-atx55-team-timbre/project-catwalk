import { RelCard, RelCardActions, RelCardContent, RelCardMedia, useStyles } from './CardTemplate';
import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import request from './Requests';
import StarComponent from '../reviews-components/StarComponent.js';
import ratingComponent from '../reviews-components/ratingComponent.js';

function OutfitCard({ item, removeOutfit, handleIdChange }) {
  const classes = useStyles();

  const [product, setProduct] = useState({
    general: [],
    styles: ''
  });

  const [rating, setRating] = useState(0);

  useEffect(() => {
    async function getAllProductData() {
      const productData = await request.get(`/${item}/`);
      const styleData = await request.get(`/${item}/styles`);
      // const reviewData = await request.get()
      let stylePhoto = styleData.data.results[0].photos[0].thumbnail_url;
      setProduct({ general: productData.data, styles: stylePhoto });
    };
    getAllProductData();
    ratingComponent(item)
      .then(result => {
        setRating(result[0]);
      })
      .catch(err => console.error(err));
  }, [item]) 

  return (
    <Grid item xs={3}>
      <Container>
          <RelCard className={classes.card}>
            <RelCardMedia
              media="picture"
              alt="Product Name"
              image={product.styles}
              title="Product Name"
              className={classes.media}
              onClick={() => { handleIdChange(product.general.id, product.general.name) }}
            />
            <RelCardContent>
              <Typography
                variant="body2"
                component="p"
              >
                {/* CATEGORY */}
                {product.general.category}
              </Typography>
              <Typography variant="h5" className={classes.title}>
                {/* PRODUCT NAME */}
                {product.general.name}
              </Typography>
              <Typography variant="body1" className={classes.price}>
                {/* PRICE */}
                {product.general.default_price}
              </Typography>
              <div>
                <StarComponent rating={rating} display="inline-block" />
              </div>
            </RelCardContent>
            <RelCardActions>
              <IconButton onClick={() => removeOutfit(product.general.id)}>
                <CloseRoundedIcon style={{color: 'red' }} />
              </IconButton>
            </RelCardActions>
          </RelCard>
        </Container>
      </Grid>
  );
}

export default OutfitCard;