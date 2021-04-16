import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Related from './components/related/Related'

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products', {
      headers: {
        Authorization:''
      }
    })
      .then((results) => {
        console.log(results);
      })
  }

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
            <Related />
            <h1>This will be for the Related Items</h1>
            {/* Q/A */}
            <h1>This will be for the Questions/Answers</h1>
            {/* Reviews/Ratings */}
            <h1>This will be for the Reviews/Ratings</h1>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    )
  }
}

export default App;
