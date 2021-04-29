import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Box
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import jeff from '../jeffssecret.png';
import SearchBar from './SearchBar.jsx';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  announcement: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 12
  },
  title: {
    flex: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontFamily: ['"Cinzel"', 'serif'],
    marginTop: '20px',
    marginBottom: '20px',
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
    <div className={classes.root}>
      <AppBar elevation={0} color='primary' position='static'>
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
            <Grid item container xs={12} md={6}>
              <Box p={3}>
                <Button className>
                  Jackets
                </Button>
              </Box>
              <Box p={3}>
                <Button className>
                  Pants
                </Button>
              </Box>
              <Box p={3}>
                <Button className>
                  Dress Shoes
                </Button>
              </Box>
              <Box p={3}>
                <Button className>
                  Heels
                </Button>
              </Box>
              <Box p={3}>
                <Button className>
                  Accessories
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <SearchBar
                searchClass={classes.search}
                searchIconClass={classes.searchIcon}
                inputRootClass={classes.inputRoot}
                inputInputClass={classes.inputInput}
                onSearchFormSubmit={onSearchFormSubmit}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography className={classes.announcement}>
        FREE shipping on orders $99+ | Register for FREE Shipping on Your 1st Order and a Chance to Learn Jeff's Secret
      </Typography>
    </div>
  );
}
