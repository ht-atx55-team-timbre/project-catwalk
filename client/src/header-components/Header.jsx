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
import { makeStyles } from '@material-ui/core/styles';
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
  }
}));

export default function Header({ onSearchFormSubmit, allProducts, track }) {
  const classes = useStyles();

  const handleButtonClick = (e) => {
    track(e, 'Header Buttons');
  }

  const handleCartClick = (e) => {
    track(e, 'Cart Button');
  }

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
              <Button className={classes.categories} onClick={handleButtonClick}>
                Jackets
              </Button>
              <Button className={classes.categories} onClick={handleButtonClick}>
                Pants
              </Button>
              <Button className={classes.categories} onClick={handleButtonClick}>
                Dress Shoes
              </Button>
              <Button className={classes.categories} onClick={handleButtonClick}>
                Heels
              </Button>
              <Button className={classes.categories} onClick={handleButtonClick}>
                Kicks
              </Button>
              <Button className={classes.categories} onClick={handleButtonClick}>
                Accessories
              </Button>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item container direction="row" alignItems="center" xs={12} md={2}>
              <Grid item xs={10}>
                <SearchBar
                  searchClass={classes.search}
                  searchBorder={classes.searchBorder}
                  onSearchFormSubmit={onSearchFormSubmit}
                  allProducts={allProducts}
                />
              </Grid>
              <Grid item xs={2}>
                <Box>
                  <IconButton onClick={handleCartClick} >
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
