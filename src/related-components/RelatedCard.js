import { RelCard, RelCardActions, RelCardContent, RelCardMedia, useStyles } from "./CardTemplate";
import { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import { IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import request from "./Requests";


function RelatedCard({ item }) {
  const classes = useStyles();

  const [product, setProduct] = useState({
    general: [],
    styles: []
  });

  useEffect(() => {
    getAllProductData();
  }, []) 

  const getAllProductData = async () => {
    const productData = await request.get(`/${item}/`);
    const styleData = await request.get(`/${item}/styles`);
    // const reviewData = await request.get()
    let stylePhoto = styleData.data.results[0].photos[0].url;
    console.log(styleData);
    setProduct({ general: productData.data, styles: stylePhoto });
  };

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
              <IconButton>
                <StarRoundedIcon style={{color: 'white' }} />
              </IconButton>
            </RelCardActions>
          </RelCard>
        </Container>
      </Grid>
  );
}

export default RelatedCard;