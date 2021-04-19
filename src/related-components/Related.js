import { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../config';

import CardItem from './CardItem';
import { Grid } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const Related = (props) => {
  
  const productId = 24156;
  
  const [related, setRelated] = useState([]);
  
  useEffect(() => {
    getRelated();
  }, []) 
  
  const createRelatedItems = (array) => {
    let newItems = [];
    for (let i = 0; i < array.length; i+=4) {
      newItems.push(<CardItem key={i} products={array.splice(i, 4)} />)
    }
    return newItems;
  }

  const getRelated = () => {
    let relatedURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}/related`;
    axios.get(relatedURL, {
      headers: {
        Authorization: API_KEY
      }
    })
    .then(results => {
      setRelated(createRelatedItems(results.data));
    })
    .catch(err => console.log('There was an error:' + err))
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

      </Grid>
    </Grid>
  )
}

export default Related;






// class Related extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       related: []
//     }
//   }

//   componentDidMount() {
//     let relatedURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}/related`;
//     axios.get(relatedURL, {
//       headers: {
//         Authorization: API_KEY
//       }
//     })
//     .then(results => this.setState({ related: results.data }));
//   }

//   render() {
//     return (
//     <Grid container>
//       <Grid container item xs={8} >
//         This is the related products
//         <Carousel autoPlay={false} >
//           {this.state.related.map((product, idx) => {
//             return <RelatedCard key={idx} productId={product} />
//           })}
//         </Carousel>
//       </Grid> 
//       <Grid container item xs={8}>
//         This will be for My Outfit
//       </Grid> 
//     </Grid>
//     )
//   }
// }





// {/* <Grid container direction="column">
// <Grid item container direction="row">
//   <RelatedCard />
// </Grid>
// <Grid item container direction="row">
//   <RelatedCard />
// </Grid>
//   {/* {this.state.related.map(product => {
//     return <RelatedCard productId={product} />
//   })} */}

// {/* <h1>Your Outfit:</h1>
//   <RelatedCard />
// </Grid> */} */}