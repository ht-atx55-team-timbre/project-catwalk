import { useState, useEffect, useRef } from 'react';
import request from './Requests';
import AddOutfitCard from './AddOutfitCard';
import { Grid, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import RelatedCard from './RelatedCard';
import OutfitCard from './OutfitCard';

const Related = ({ product_id, handleIdChange }) => {

  // const [currItem, setCurrItem] = useState(0);
  // const [outfitArray, setOutfitArray] = useState([]);
  const [outfits, setOutfits] = useState([]);
  const [related, setRelated] = useState([]);
  const currItemRef = useRef(0);
  const currOutfitArrayRef = useRef([]);

  useEffect(() => {
    function createRelatedItems(array) {
      let relatedItems = [];
      let results = [];
      let chunk = 4;
      for (let i = 0; i < array.length; i++) {
        relatedItems.push(<RelatedCard key={i} item={array[i]} original={product_id} handleIdChange={handleIdChange} />)
      }
      for (let i = 0; i < relatedItems.length; i += chunk) {
        let tempArr = relatedItems.slice(i, i+chunk);
        results.push(tempArr);
      }
      return results;
    }

    async function getRelated() {
      const results = await request.get(`/${product_id}/related`);
      let uniqueResults = [...new Set(results.data)]
      setRelated(createRelatedItems(uniqueResults));
      currItemRef.current = product_id;
    };

    getRelated();
  }, [product_id, handleIdChange])

  const createOutfitItems = (array) => {
    let outfitItems = [];
    let results = [];
    let chunk = 3;
    for (let i = 0; i < array.length; i++) {
      outfitItems.push(<OutfitCard key={i} item={array[i]} removeOutfit={handleOutfitRemove} handleIdChange={handleIdChange} />)
    }
    for (let i = 0; i < outfitItems.length; i+=chunk) {
      let tempArr = [];
      tempArr.push(<AddOutfitCard addOutfit={handleOutfitAdd} />);
      tempArr.push(outfitItems.slice(i, i+chunk));
      results.push(tempArr);
    }
    setOutfits(results);
  }

  const handleOutfitAdd = () => {
    let itemsArray = currOutfitArrayRef.current;
    if (!itemsArray.includes(currItemRef.current)) {
      itemsArray.push(currItemRef.current);
    }
    // setOutfitArray(itemsArray);
    currOutfitArrayRef.current = itemsArray;
    createOutfitItems(itemsArray);
  }

  const handleOutfitRemove = (id) => {
    let newOutfitArray = currOutfitArrayRef.current;
    let result = [];
    for (let i = 0; i < newOutfitArray.length; i++) {
      if (newOutfitArray[i] !== id) {
        result.push(newOutfitArray[i])
      }
    }
    // setOutfitArray(result);
    currOutfitArrayRef.current = result;
    createOutfitItems(result);
  }

  return (
    <Grid container item xs={12} direction='column'>
      <Grid container item xs={12}>
        <Typography>Related Products:</Typography>
      </Grid>
      <Grid container>
        <Grid container item justify="center" xs={12}>
          <Carousel autoPlay={false} navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
            bottom: '100px',
            height: '50%',
            top: 'unset'
          }
        }}>
            {related.map((item, idx) => {
              if (item.length > 1) {
                return (
                  <Grid key={idx} container item direction='row' justify='space-evenly' spacing={10} xs={12}>{item}</Grid>
                )
              }else{
                return (
                  <Grid container item direction='row' spacing={10} xs={12} key={idx}>{item}</Grid>
                )
              }
            })
          }

          </Carousel>
        </Grid>
        <Grid container item xs={12}>
        <Typography>Your Outfit:</Typography>
      <Grid container item justify="center" xs={12}>
        <Carousel autoPlay={false} navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
            bottom: '100px',
            height: '50%',
            top: 'unset'
          }
        }}>
          {currOutfitArrayRef.current.length === 0 ? <AddOutfitCard key='add' addOutfit={handleOutfitAdd} /> : (outfits.map((item, idx) => (<Grid container item direction='row' justify='space-evenly' spacing={10} xs={12} key={idx}>{item}</Grid>)))}
        </Carousel>
      </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Related;