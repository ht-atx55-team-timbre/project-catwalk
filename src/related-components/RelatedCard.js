import request from './Requests';
import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import { RelCard, RelCardActions, RelCardContent, RelCardMedia, useStyles } from './CardTemplate';
import { DialogTitle, DialogContent } from './ComparisonDialog';
import StarComponent from '../reviews-components/StarComponent.js';
import ratingComponent from '../reviews-components/ratingComponent.js';

const tableStyle = {
  textAlign: 'center',
  padding: '10px',
  tableLayout: 'fixed',
  width: '99%',
  borderCollapse: 'collapse',
  fontFamily: '"Nunito", sans-serif',
  color: '#181E34'
}


function RelatedCard({ item, handleIdChange, original }) {
  const classes = useStyles();

  const [comparison, setComparison] = useState([])

  const [product, setProduct] = useState({
    general: [],
    styles: 'data:'
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
      setComparison([originalData.data.features, productData.data.features]);

      let comparisonObj = {};
      let originalFeatures = originalData.data.features;
      let newFeatures = productData.data.features;
      originalFeatures.forEach((feat) => { comparisonObj[feat.feature] = { original: feat.value, new: '' }});
      newFeatures.forEach((feat) => { 
        if (!comparisonObj[feat.feature]) {
          comparisonObj[feat.feature] = {
            original: '',
            new: feat.value
          }
        } else {
          comparisonObj[feat.feature].new = feat.value
        }
      })
      let comparisonArr = [[originalData.data.name, 'Feature', productData.data.name]];
      for (let key in comparisonObj) {
        let arr = [comparisonObj[key].original, key, comparisonObj[key].new];
        comparisonArr.push(arr);
      }
      setComparison(comparisonArr);
      ratingComponent(item)
      .then(result => {
        setRating(result[0]);
      })
      .catch(err => console.error(err));
    };
    getAllProductData();
  }, [item, original]) 

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
                {product.general.category}
              </Typography>
              <Typography variant="h5" className={classes.title}>
                {product.general.name}
              </Typography>
              <Typography variant="body1" className={classes.price}>
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
                    {comparison[0] &&
                    <table style={tableStyle}>
                      <tr>
                        <th style={{width: '33%'}}>{comparison[0][0]}</th>
                        <th style={{width: '33%'}}></th>
                        <th style={{width: '33%'}}>{comparison[0][2]}</th>
                      </tr>
                      {comparison.map((item, idx) => 
                        (idx !== 0 &&
                          <tr key={idx}>
                            <td key={idx} style={{width: '33%', borderTop: '2px solid #f78e81'}}>{item[0]}</td>
                            <td key={idx} style={{width: '33%', borderTop: '2px solid #f78e81'}}>{item[1]}</td>
                            <td key={idx} style={{width: '33%', borderTop: '2px solid #f78e81'}}>{item[2]}</td>
                          </tr>
                      ))}
                    </table>}
                </DialogContent>
              </Dialog>
            </RelCardActions>
          </RelCard>
        </Container>
      </Grid>
  );
}

export default RelatedCard;