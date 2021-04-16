import React from 'react';
// import axios from 'axios';
import { Grid } from '@material-ui/core';
<<<<<<< HEAD
import API_KEY from './config';
import ReviewsAndRatings from './reviews/ReviewsAndRatings';
=======
// import API_KEY from './config';

import QA from './QA_Components/Main.jsx';
>>>>>>> dcc196f596f4b10754c7156728e627a1668e0f17

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

<<<<<<< HEAD
  componentDidMount() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products', {
      headers: {
        Authorization: API_KEY
      }
    })
      .then((results) => {
        console.log(results);
      })
  }
=======
  // componentDidMount() {
  //   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products', {
  //     headers: {
  //       Authorization: API_KEY
  //     }
  //   })
  //     .then((results) => {
  //       console.log(results);
  //     })
  // }
>>>>>>> dcc196f596f4b10754c7156728e627a1668e0f17

  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          {/* Header component will go here */}
          <h1>This will be the header</h1>
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            {/* Product Overview */}
            <h1>This will be for the Product Overview</h1>
            {/* Related Items */}
            <h1>This will be for the Related Items</h1>
            {/* Q/A */}
<<<<<<< HEAD
            <h1>This will be for the Questions/Answers</h1>
            <ReviewsAndRatings />
=======
            <QA />
            {/* Reviews/Ratings */}
>>>>>>> dcc196f596f4b10754c7156728e627a1668e0f17
            <h1>This will be for the Reviews/Ratings</h1>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    )
  }
}

export default App;
