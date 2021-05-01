import { RelCard, useStyles } from './CardTemplate';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import Container from '@material-ui/core/Container';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import CardActions from '@material-ui/core/CardActions';

const AddCardActions = withStyles({
  root: {
    position: 'absolute',
    right: '25%',
    top: '35%'
  }
})(CardActions); 

function AddOutfitCard({ addOutfit }) {
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <Container>
          <RelCard className={classes.card} style={{backgroundColor: '#FFAB91'}}>
            <AddCardActions>
              <IconButton onClick={() => addOutfit()}>
                <AddCircleOutlineRoundedIcon style={{color: 'white', fontSize: 60}} />
              </IconButton>
            </AddCardActions>
          </RelCard>
        </Container>
      </Grid>
  );
}

export default AddOutfitCard;
