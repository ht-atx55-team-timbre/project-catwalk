import { IconButton, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import withStyles from "@material-ui/core/styles/withStyles";
import makeStyles from "@material-ui/styles/makeStyles";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

const RelatedCard2 = withStyles({
  root: {
    position: "relative"
  }
})(Card);

const RelatedCardActionArea2 = withStyles({
  root: {
    position: "relative"
  }
})(CardActionArea);

const RelatedCardCardActions2 = withStyles({
  root: {
    position: "relative"
  }
})(CardActions);

const RelatedCardCardContent2 = withStyles({
  root: {
    position: "relative",
    backgroundColor: "transparent"
  }
})(CardContent);

const RelatedCardCardMedia2 = withStyles({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%"
  }
})(CardMedia);

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    maxWidth: 200
  },
  media: {
    height: 400
  },
  fiCardContent: {
    color: "black",
    minHeight: 300
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)"
  }
});

const ProductCard = () => {
  const classes = useStyles();
  return (
    <RelatedCard2 className={classes.card}>
      <RelatedCardActionArea2>
        <RelatedCardCardMedia2 
        media="picture" 
        alt="Product Img"
        image="https://s7d5.scene7.com/is/image/UrbanOutfitters/58003260_012_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=540"
        title="Animal Crossing T-Shirt"
        />
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0
        }}>
          <IconButton>
            <StarRoundedIcon />
          </IconButton>
        </div>
        <RelatedCardCardContent2 className={classes.fiCardContent}>
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0
          }}>
            <Typography variant="h5" component="h2">
              T-Shirt
            </Typography>
          </div>
        </RelatedCardCardContent2>
      </RelatedCardActionArea2>
    </RelatedCard2>

  )
}

export default ProductCard;