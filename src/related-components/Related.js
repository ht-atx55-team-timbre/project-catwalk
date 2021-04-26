import { useState, useEffect } from 'react';
import request from './Requests';

import AddOutfitCard from './AddOutfitCard';
import { Grid } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import RelatedCard from './RelatedCard';

const Related = ({ product_id }) => {
  
  const [outfitArray, setOutfitArray] = useState([]);
  const [outfits, setOutfits] = useState([]);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    getRelated();
  }, []) 
  
  const createOutfitItems = (array) => {
    let outfitItems = [];
    let results = [];
    let chunk = 3;
    for (let i = 0; i < array.length; i++) {
      outfitItems.push(<RelatedCard key={i} item={array[i]} />)
    }
    for (let i = 0; i < outfitItems.length; i+=chunk) {
      let tempArr = [];
      tempArr.push(<AddOutfitCard addOutfit={handleOutfitAdd} />);
      tempArr.push(outfitItems.slice(i, i+chunk));
      results.push(tempArr);
    }
    setOutfits([results]);
  }

  const handleOutfitAdd = () => {
    let itemsArray = outfitArray;
    if (!itemsArray.includes(product_id)) {
      itemsArray.push(product_id);
    }
    setOutfitArray([...itemsArray]);
    createOutfitItems(itemsArray);
  }

  const createRelatedItems = (array) => {
    let relatedItems = [];
    let results = [];
    let chunk = 4;
    for (let i = 0; i < array.length; i++) {
      relatedItems.push(<RelatedCard key={i} item={array[i]} />)
    }
    for (let i = 0; i < relatedItems.length; i += chunk) {
      let tempArr = relatedItems.slice(i, i+chunk);
      results.push(tempArr);
    }
    return results;
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
          {related.map((item, idx) => (<Grid container item direction='row' xs={12} key={idx}>{item}</Grid>))}
        </Carousel>
      </Grid>
      <Grid container item xs={12}>
      Your Outfit:
    <Grid container item justify="center" xs={12}>
      <Carousel>
        {outfitArray.length === 0 ? <AddOutfitCard addOutfit={handleOutfitAdd} /> : (outfits.map((item, idx) => (<Grid container item direction='row' justify='space-evenly' spacing={10} xs={12} key={idx}>{item}</Grid>)))}
      </Carousel>
    </Grid>
      </Grid>
    </Grid>
  )
}

export default Related;