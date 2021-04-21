import RelatedCard from './RelatedCard';
import { Grid } from '@material-ui/core';

const CardItems = (props) => {
  return (
    <Grid container item direction="row" xs={12}>
      {props.products.map((product, idx) => (<RelatedCard key={idx} item={product} />))}  
    </Grid>
  )
}

export default CardItems
