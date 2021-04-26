import { useState, useEffect } from 'react';
import request from './Requests';

import AddOutfitCard from './AddOutfitCard';
import { Grid } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import RelatedCard from './RelatedCard';
import OutfitCard from './OutfitCard';

const Related = ({ product_id }) => {
  
  const [outfitArray, setOutfitArray] = useState([]);
  const [outfits, setOutfits] = useState([]);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    async function getRelated() {
      const results = await request.get(`/${product_id}/related`);
      setRelated(createRelatedItems(results.data));
    };

    getRelated();
  }, [product_id]) 
  
  const createOutfitItems = (array) => {
    let outfitItems = [];
    let results = [];
    let chunk = 3;
    for (let i = 0; i < array.length; i++) {
      outfitItems.push(<OutfitCard key={i} item={array[i]} removeOutfit={handleOutfitRemove} />)
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

  const handleOutfitRemove = (id) => {
    let newOutfitArray = outfitArray;
    let result = [];
    for (let i = 0; i < newOutfitArray.length; i++) {
      if (newOutfitArray[i] !== id) {
        result.push(newOutfitArray[i])
      }
    }
    setOutfitArray(result);
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

  return (
    <Grid container xs={12} direction='column'>
      <Grid container item xs={12}> 
      Related Products:
      </Grid>
      <Grid container>
        <Grid container item justify="center" xs={12}>
          <Carousel autoPlay={false} >
            {related.map((item, idx) => (<Grid container item direction='row' xs={12} key={idx}>{item}</Grid>))}
          </Carousel>
        </Grid>
        <Grid container item xs={12}>
        Your Outfit:
      <Grid container item justify="center" xs={12}>
        <Carousel autoPlay={false}>
          {outfitArray.length === 0 ? <AddOutfitCard addOutfit={handleOutfitAdd} /> : (outfits.map((item, idx) => (<Grid container item direction='row' justify='space-evenly' spacing={10} xs={12} key={idx}>{item}</Grid>)))}
        </Carousel>
      </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Related;