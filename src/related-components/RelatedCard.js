import { RelCard, RelCardActions, RelCardContent, RelCardMedia, useStyles } from './CardTemplate';
// import { withStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import request from './Requests';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle, DialogContent } from './ComparisonDialog';
import StarComponent from '../reviews-components/StarComponent.js';
import ratingComponent from '../reviews-components/ratingComponent.js';

function RelatedCard({ item, handleIdChange, original }) {
  const classes = useStyles();

  const [comparison, setComparison] = useState({
    original: [],
    new: []
  })

  const [product, setProduct] = useState({
    general: [],
    styles: ''
  });

  const [rating, setRating] = useState(0);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  useEffect(() => {
    async function getAllProductData() {
      const originalData = await request.get(`${original}`);
      const productData = await request.get(`/${item}/`);
      const styleData = await request.get(`/${item}/styles`);
      let stylePhoto = 'https://lightwidget.com/wp-content/uploads/local-file-not-found.png';
      if (styleData.data.results[0].photos[0].thumbnail_url) {
        stylePhoto = styleData.data.results[0].photos[0].thumbnail_url
      }
      setProduct({ general: productData.data, styles: stylePhoto });
      setComparison({original: originalData.data.features, new: productData.data.features});
      ratingComponent(item)
      .then(result => {
        setRating(result[0]);
      })
      .catch(err => console.error(err));
    };
    getAllProductData();
  }, [item]) 
  
  // useEffect(() => {
  //   // async function getReviews() {
  //   //   let result = await ratingComponent(product.general.id);
  //   //   setRating(result[0]);
  //   // }
  //   // getReviews();
  //   ratingComponent(product.general.id)
  //     .then(result => {
  //       setRating(result[0]);
  //     })
  //     .catch(err => console.error(err));
  // }, [product]);
  // console.log(comparison.original.data.features[0]);

  return (
    <Grid item xs={3}>
      <Container>
          <RelCard className={classes.card} color='primary'>
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
              <IconButton onClick={handleClickOpen}>
                <StarRoundedIcon style={{color: 'white' }} />
              </IconButton>
              <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                  Product Comparison
                </DialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    {comparison.original.map((item, idx) => <li key={idx}>{item.feature}</li>)}
                  </Typography>
                  <Typography gutterBottom>
                    {comparison.new.map((item, idx) => <li key={idx}>{item.feature}</li>)}
                  </Typography>
                </DialogContent>
              </Dialog>
            </RelCardActions>
          </RelCard>
        </Container>
      </Grid>
  );
}

export default RelatedCard;