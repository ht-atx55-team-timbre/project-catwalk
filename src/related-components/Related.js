import React from 'react';
import { Grid } from '@material-ui/core';
import RelatedCard from './RelatedCard';
import axios from 'axios';
import API_KEY from '../config';

//Assuming that the productID will be passed as a prop from the App.js file:
const productId = 24156;


class Related extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      related: []
    }
  }

  componentDidMount() {
    let relatedURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}/related`;
    axios.get(relatedURL, {
      headers: {
        Authorization: API_KEY
      }
    })
    .then(results => this.setState({ related: results.data }));
  }

  render() {
    return (
    <Grid container>
      <Grid container item xs={8} >
        {this.state.related.map((product, idx) => {
          return <RelatedCard key={idx} productId={product} />
        })}
      </Grid> 
      <Grid container item xs={8}>
      </Grid> 
    </Grid>
    )
  }
}

export default Related;




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