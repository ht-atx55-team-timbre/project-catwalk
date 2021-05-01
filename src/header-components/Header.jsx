import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Box,
  IconButton
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import jeff from '../jeffssecret.png';
import SearchBar from './SearchBar.jsx';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 100
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  announcement: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: ['"Cinzel"', 'serif'],
  },
  title: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontFamily: ['"Cinzel"', 'serif'],
    marginTop: '20px',
    marginBottom: '20px',
  },
  categories: {
    fontSize: 18,
    fontFamily: ['"Cinzel"', 'serif'],
    textTransform: 'none'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
  }
}));

export default function Header({ onSearchFormSubmit, allProducts }) {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.root} elevation={0} color='primary' position='static'>
        <Toolbar>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={12} md={3}>
              <Grid container direction="row" alignItems="center">
                <img src={jeff} alt='js' height='45px' />
                <Typography className={classes.title} style={{ fontSize: 30 }} noWrap>
                  <span>Jeff's Secret</span>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} md={6} style={{ display: "flex", justifyContent: "space-evenly" }} >
              <Button className={classes.categories}>
                Jackets
              </Button>
              <Button className={classes.categories}>
                Pants
              </Button>
              <Button className={classes.categories}>
                Dress Shoes
              </Button>
              <Button className={classes.categories}>
                Heels
              </Button>
              <Button className={classes.categories}>
                Accessories
              </Button>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item container direction="row" alignItems="center" xs={12} md={2}>
              <Grid item xs={10}>
                <SearchBar
                  searchClass={classes.search}
                  onSearchFormSubmit={onSearchFormSubmit}
                  allProducts={allProducts}
                />
              </Grid>
              <Grid item xs={2}>
                <Box>
                  <IconButton>
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box pt={13} pb={3}>
        <Typography style={{ textAlign: "center" }}>
          Free shipping on orders $99+ | Register for Free Shipping on Your 1st Order
        </Typography>
      </Box>
    </div>
  );
}
