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
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header({ onSearchFormSubmit }) {
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
                  searchIconClass={classes.searchIcon}
                  inputRootClass={classes.inputRoot}
                  inputInputClass={classes.inputInput}
                  onSearchFormSubmit={onSearchFormSubmit}
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
        <Typography style={{textAlign: "center"}}>
          Free shipping on orders $99+ | Register for Free Shipping on Your 1st Order and a Chance to Learn Jeff's Secret
        </Typography>
      </Box>
    </div>
  );
}
