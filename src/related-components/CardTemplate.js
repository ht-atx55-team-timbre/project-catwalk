import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import withStyles from "@material-ui/core/styles/withStyles";

export const RelCard = withStyles({
  root: {
    position: "relative"
  }
})(Card);

export const RelCardActions = withStyles({
  root: {
    position: "absolute",
    right: 0
  }
})(CardActions);

export const RelCardContent = withStyles({
  root: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    width: '100%'
  }
})(CardContent);

export const RelCardMedia = withStyles({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
  }
})(CardMedia);


export const useStyles = makeStyles({
  card: {
    width: 200,
    height: 350,
    backgroundColor: 'grey'
  },
  price: {
    fontSize: '12px'
  },
  title: {
    fontSize: '16px'
  },
  media: {
    cursor: 'pointer'
  }
});

export default {
  RelCard,
  RelCardActions,
  RelCardContent,
  RelCardMedia,
  useStyles
}