import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import { IconButton } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import withStyles from "@material-ui/core/styles/withStyles";


const RelCard = withStyles({
  root: {
    position: "relative"
  }
})(Card);

const RelCardActions = withStyles({
  root: {
    position: "absolute",
    right: 0
  }
})(CardActions);

const RelCardContent = withStyles({
  root: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    width: '100%'
  }
})(CardContent);

const RelCardMedia = withStyles({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
  }
})(CardMedia);


const useStyles = makeStyles({
  card: {
    width: 300,
    height: 500
  },
  price: {
    fontSize: '12px'
  },
  title: {
    fontSize: '16px'
  }
});

function RelatedCard(props) {
  const classes = useStyles();
  return (
    <Container>
        <RelCard className={classes.card}>
          <RelCardMedia
            media="picture"
            alt="Product Name"
            image="https://s7d5.scene7.com/is/image/UrbanOutfitters/58003260_012_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=540"
            title="Product Name"
          />
          <RelCardContent>
            <Typography
              variant="body2"
              component="p"
            >
              CATEGORY
            </Typography>
            <Typography variant="h5" className={classes.title}>
              PRODUCT NAME
            </Typography>
            <Typography variant="body1" className={classes.price}>
              PRICE
            </Typography>
            <Typography variant="body1">
              REVIEWS
            </Typography>
          </RelCardContent>
          <RelCardActions>
            <IconButton>
              <StarRoundedIcon />
            </IconButton>
          </RelCardActions>
        </RelCard>
      </Container>
  );
}

export default RelatedCard;