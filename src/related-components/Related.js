import { useState, useEffect } from 'react';
import request from './Requests';

import AddOutfitCard from './AddOutfitCard';
import OutfitItems from './OutfitItems';
import RelatedItems from './RelatedItems';
import { Grid } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const Related = ({ product_id }) => {
  
  const [related, setRelated] = useState([]);
  
  useEffect(() => {
    getRelated();
  }, [product_id]) 
  
  const createRelatedItems = (array) => {
    let newItems = [];
    for (let i = 0; i < array.length; i+=4) {
      newItems.push(<RelatedItems key={i} products={array.splice(i, 4)} />)
    }
    return newItems;
  }

  const getRelated = async () => {
    const results = await request.get(`/${product_id}/related`);
    setRelated(createRelatedItems(results.data));
  };

  return (
    <Grid container>
      Related Products:
      <Grid container item justify="center" xs={12}>
        <Carousel>
          {related}
        </Carousel>
      </Grid>
      <Grid container item xs={12}>
      Your Outfit:
    <Grid container item justify="center" xs={12}>
      <Carousel>
        <AddOutfitCard />
      </Carousel>
    </Grid>
      </Grid>
    </Grid>
  )
}

export default Related;