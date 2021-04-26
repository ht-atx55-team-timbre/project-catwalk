import React, { useState, useEffect, useCallback } from 'react';
import {
  Grid,
  CardContent,
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import API_KEY from '../config.js';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Cart = ({ currentStyle }) => {
  const classes = useStyles();

  const [cart, setCart] = useState([]);
  const [sku, setSKU] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const skus = currentStyle.skus;

  const addToCart = () => {
    postToCart();
    setSKU(null);
    setQuantity(null);
  }

  const handleSKUChange = (e) => {
    console.log('sku event', e.target.value);
    setSKU(e.target.value);
  }

  const handleQtyChange = (e) => {
    console.log('qty event', e.target.value);
    setQuantity(e.target.value);
  }

  const createQuantity = (quantity) => {
    let array = [];
    for (let i = 1; i <= quantity; i++) {
      array.push(i);
    }
    return array;
  }

  const getCartContents = useCallback(() => {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/cart`, {
        headers: {
          Authorization: API_KEY
        }
      })
      .then(response => {
        console.log('response', response.data);
        setCart(response.data);
        // console.log('cart', cart);
      })
      .then(response => {
        console.log('cart', cart);
      })
      .catch(err => console.error(err));
  }, [cart, setCart]);

  const postToCart = () => {
    if (sku && quantity) {
      axios({
        method: 'post',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/cart`,
        data: {
          sku_id: sku,
          count: quantity
        },
        headers: {
          Authorization: API_KEY
        }
      })
        .then(res => {
          getCartContents();
        })
        .catch(err => console.error(err));
    }
  }

  const handleClick = (e) => {
    setAnchorEl(e.target);
    console.log('sku & qty', sku, quantity);
  }

  const handleClose = () => {
    setAnchorEl(null);
    console.log('sku & qty', sku, quantity);
  }

  // useEffect(() => {
  //   setCart();
  // }, [setCart]);


  return (
    <div className={classes.root} display='inline'>
      <CardContent>
        <Grid container direction='column'>
          <Grid container direction='row'>
            <Grid item xs={6}>
              <Button
                variant='contained'
                aria-controls='select-size'
                aria-haspopup='true'
                color='primary'
                onClick={handleClick}
              >
                Select A Size
              </Button>
              <Menu
                id='select-size'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {Object.keys(skus).map((sku, idx) => {
                  return (
                    <MenuItem
                      key={idx}
                      onClick={handleSKUChange}
                      value={sku}
                    >
                      {skus[sku].size}
                    </MenuItem>
                  );
                })}
              </Menu>
            </Grid>
            <Grid item xs={6}>
              {sku ?
                <div className={classes.root}>
                  <Button
                    variant='contained'
                    aria-controls='select-qty'
                    aria-haspopup='true'
                    color='secondary'
                    onClick={handleClick}
                  >
                    Select Qty
                </Button>
                  <Menu
                    id='select-qty'
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClick={handleClose}
                  >
                    {createQuantity(skus[sku].quantity).map((number, idx) => {
                      return (
                        <MenuItem
                          key={idx}
                          onClick={handleQtyChange}
                          value={number}
                        >
                          {number}
                        </MenuItem>
                      )
                    })}
                  </Menu>
                </div> :
                <div>
                  <Button
                    variant='contained'
                    color='primary'
                    disabled
                  >
                    Select Qty
                </Button>
                </div>
              }
            </Grid>
          </Grid>
          <Grid container direction='row' item xs={12}>
            <div>
              <Button
                variant='contained'
                color='primary'
                onClick={addToCart}
              >
                Add To Cart
            </Button>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </div>
  );
}

export default Cart;