import { RelCard, RelCardActions, RelCardContent, RelCardMedia, useStyles } from "./CardTemplate";
import { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import request from "./Requests";

function OutfitCard({ item, removeOutfit, handleIdChange }) {
  const classes = useStyles();

  const [product, setProduct] = useState({
    general: [],
    styles: ''
  });

  useEffect(() => {
    async function getAllProductData() {
      const productData = await request.get(`/${item}/`);
      const styleData = await request.get(`/${item}/styles`);
      // const reviewData = await request.get()
      let stylePhoto = styleData.data.results[0].photos[0].url;
      setProduct({ general: productData.data, styles: stylePhoto });
    };
    getAllProductData();
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
              <Typography variant="body1">
                REVIEWS
              </Typography>
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