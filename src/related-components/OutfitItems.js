import AddOutfitCard from './AddOutfitCard';
import request from './Requests';
import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import RelatedCard from './RelatedCard';

const OutfitItems = ({ handleAdd, products }) => {
    return (
      <Grid container item direction="row" xs={12}>
        <AddOutfitCard addOutfit={handleAdd} />
        {products.map((product, idx) => (<RelatedCard key={idx} item={product} />))}  
      </Grid>
    )
  // const [items, setItems] = useState([]);

  // const addOutfit = async () => {
  //   const results = await request.get(`/${currProduct}`);
  //   const details = await request.get(`/${currProduct}/styles`);
  //   let newOutfit = {
  //       id: currProduct,
  //       category: results.data.category,
  //       price: results.data.default_price,
  //       name: results.data.name,
  //       photo: details.data.results[0].photos[0].url
  //   }
  //   let itemsArray = items;
  //   let ids = [];
  //   itemsArray.forEach(item => ids.push(item.id));
  //   if (!ids.includes(newOutfit.id)) {
  //     itemsArray.push(newOutfit);
  //   }
  //   setItems([...itemsArray]);
  // };

  // const generateOutfit = () => {
  // }
  // //For each new set of 4, the AddOutfitCard will be the first item put into the array:
  // return (
  //   <div>
  //     <button onClick={addOutfit}>Test</button>
  //     This will be where the Outfits Go
  //   </div>
  // )
}

export default OutfitItems
