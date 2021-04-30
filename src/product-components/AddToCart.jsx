import React, { useState, useEffect, useRef } from 'react';
import {
  CardContent,
  Button,
  ClickAwayListener,
  Grow,
  Popper,
  Paper,
  MenuItem,
  MenuList,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import request from './OverviewRequests.js';
// import API_KEY from '../config.js';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const Cart = ({ currentStyle }) => {
  const classes = useStyles();

  const [cart, setCart] = useState(null);
  const [sku, setSKU] = useState(null);
  const [quantity, setQuantity] = useState(null);
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [qtyOpen, setQtyOpen] = useState(false);
  var anchorRef = useRef(document.getElementById('size'));

  const skus = currentStyle.skus;

  const handleSKUChange = (e) => {
    console.log(e.target.value)
    setSKU(e.target.value);
    setSizeOpen(false);
  };

  const handleQtyChange = (e) => {
    console.log(e.target.value);
    setQuantity(e.target.value);
    setQtyOpen(false);
  };

  const createQuantity = (quantity) => {
    let array = [];
    for (let i = 1; i <= Math.min(quantity, 15); i++) {
      array.push(i);
    }
    return array;
  };

  const getCartContents = () => {
    // axios
    //   .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/cart`, {
    //     headers: {
    //       Authorization: API_KEY
    //     }
    //   })
    //   .then(response => {
    //     // console.log('response', response.data);
    //     setCart(response.data);
    //     console.log('cart', cart);
    //   })
    //   .catch(err => console.error(err));

    async function getCart() {
      const response = await request.get(`/cart`);
      setCart(response.data);
    }

    getCart();
  };

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
          // Authorization: API_KEY
        }
      })
        .then(res => {
          setSKU(null);
          setQuantity(null);
          getCartContents();
          anchorRef.current = document.getElementById('size');
        })
        .catch(err => console.error(err));
    }
  };

  const handleSizeToggle = () => {
    setSizeOpen(prevOpen => !prevOpen);
  };

  const handleQtyToggle = () => {
    setQtyOpen(prevOpen => !prevOpen);
  };

  const handleSizeClose = (e) => {
    if (anchorRef.current === true && anchorRef.current.contains(e.target)) {
      return;
    }
    setSizeOpen(false);
  };

  const handleQtyClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }

    setQtyOpen(false);
  };

  function handleSizeListKeyDown(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      console.log('e.key', e.key);
      setSizeOpen(false);
    }
  }

  function handleQtyListKeyDown(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      console.log('e.key in qty', e.key);
      setQtyOpen(false);
    }
  }

  const prevSizeOpen = useRef(sizeOpen);
  useEffect(() => {
    if (prevSizeOpen.current === true && sizeOpen === false) {
      if (sku) {
        anchorRef.current.focus();
      } else if (sku === null) {
        anchorRef.current = document.getElementById('size');
      }
    }

    prevSizeOpen.current = sizeOpen;
  }, [sizeOpen, qtyOpen, sku]);

  const prevQtyOpen = useRef(qtyOpen);
  useEffect(() => {
    if (prevQtyOpen.current === true && qtyOpen === false) {
      if (anchorRef.current) {
        anchorRef.current.focus();
      } else if (anchorRef.current !== document.getElementById('size')) {
        anchorRef.current = document.getElementById('qty');
      }
    }

    prevQtyOpen.current = qtyOpen;
  }, [qtyOpen, quantity, sku]);

  return (
    <div className={classes.root} display='inline' justifycontent='flex-start'>
      <CardContent>
        <Button
          id='size'
          variant='outlined'
          ref={anchorRef}
          aria-controls={sizeOpen ? 'size-list-grow' : undefined}
          aria-haspopup='true'
          style={{ borderRadius: 0, borderColor: 'red' }}
          onClick={handleSizeToggle}
        >
          {sku && skus[sku].size ? skus[sku].size : 'size'}
        </Button>
        <Popper open={sizeOpen} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transforOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleSizeClose}>
                  <MenuList autoFocusItem={sizeOpen} id='size-list-grow' onKeyDown={handleSizeListKeyDown}>
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
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </CardContent>
      {sku ?
        <CardContent>
          <Button
            id='qty'
            variant='outlined'
            ref={anchorRef}
            aria-controls='qty-list-grow'
            aria-haspopup='true'
            style={{ borderRadius: 0, borderColor: 'red' }}
            onClick={handleQtyToggle}
          >
            {quantity ? quantity : '1'}
          </Button>
          <Popper open={qtyOpen} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transforOrigin: placement === 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleQtyClose}>
                    <MenuList
                      autoFocusItem={qtyOpen}
                      id='qty-list-grow'
                      onClose={handleQtyClose}
                      onKeyDown={handleQtyListKeyDown}
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
                        );
                      })}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </CardContent> :
        <CardContent>
          <Button
            variant='outlined'
            style={{ borderRadius: 0, borderColor: 'primary' }}
            disabled
          >
            -
          </Button>
        </CardContent>
      }
      <CardContent>
        {sku && quantity ?
          <Button
            variant='outlined'
            style={{ borderRadius: 0, borderColor: 'red' }}
            onClick={postToCart}
          >
            Add to Cart
          </Button> :
          <Button
            variant='outlined'
            style={{ borderRadius: 0, borderColor: 'primary' }}
            disabled
          >
            Add to Cart
          </Button>
        }
      </CardContent>
    </div>
  );
}

export default Cart;