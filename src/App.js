import React from 'react';
import { Grid } from '@material-ui/core';

class App extends React.Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          {/* Header component will go here */}
          <h1>This will be the header</h1>
        </Grid>
        <Grid item container>
          <Grid xs={false} sm={2} />
          <Grid xs={12} sm={8}>
            {/* Product Overview */}
            <h1>This will be for the Product Overview</h1>
            {/* Related Items */}
            <h1>This will be for the Related Items</h1>
            {/* Q/A */}
            <h1>This will be for the Questions/Answers</h1>
            {/* Reviews/Ratings */}
            <h1>This will be for the Reviews/Ratings</h1>
          </Grid>
          <Grid xs={false} sm={2} />
        </Grid>
      </Grid>
    )
  }
}

export default App;
