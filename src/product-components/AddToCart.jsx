import React, { useState, useEffect, useCallback, useRef } from 'react';
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
import API_KEY from '../config.js';

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

  const [cart, setCart] = useState([]);
  const [sku, setSKU] = useState(null);
  const [quantity, setQuantity] = useState(null);
  // const [anchorEl, setAnchorEl] = useState(null);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [qtyOpen, setQtyOpen] = useState(false);
  const anchorRef = useRef(null);

  const skus = currentStyle.skus;

  const addToCart = () => {
    postToCart();
    setSKU(null); // deal with this async
    setQuantity(null);
  };

  const handleSKUChange = (e) => {
    console.log(e.target.value)
    setSKU(e.target.value);
    handleSizeClose(e);
  };

  const handleQtyChange = (e) => {
    console.log(e.target.value);
    setQuantity(e.target.value);
    handleQtyClose(e);
  };

  const createQuantity = (quantity) => {
    let array = [];
    for (let i = 1; i <= Math.min(quantity, 15); i++) {
      array.push(i);
    }
    return array;
  };

  const getCartContents = useCallback(() => {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/cart`, {
        headers: {
          Authorization: API_KEY
        }
      })
      .then(response => {
        // console.log('response', response.data);
        setCart(response.data);
        // console.log('cart', cart);
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
          setSKU(null);
          setQuantity(null);
          getCartContents();
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
      handleSKUChange(e);
      return;
    }
    setSizeOpen(false);
  };

  const handleQtyClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      handleQtyChange(e);
      return;
    }

    setQtyOpen(false);
    // console.log('sku & qty', sku, quantity);
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
      anchorRef.current.focus();
    }

    prevSizeOpen.current = sizeOpen;
  }, [sizeOpen]);

  const prevQtyOpen = useRef(qtyOpen);
  useEffect(() => {
    if (prevQtyOpen.current === true && qtyOpen === false) {
      anchorRef.current.focus();
    }
    console.log('anchorRef', anchorRef);
    prevQtyOpen.current = qtyOpen;
  }, [qtyOpen]);

  return (
    <div className={classes.root} display='inline' justifycontent='flex-start'>
      <CardContent>
        <Button
          variant='outlined'
          ref={anchorRef}
          aria-controls={sizeOpen ? 'size-list-grow' : undefined}
          aria-haspopup='true'
          style={{ borderRadius: 0, borderColor: 'red' }}
          onClick={handleSizeToggle}
        >
          {sku ? skus[sku].size : 'size'}
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
            variant='outlined'
            ref={anchorRef}
            aria-controls={qtyOpen ? 'qty-list-grow' : undefined}
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
                style={{ transforOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleQtyClose}>
                    <MenuList autoFocusItem={qtyOpen} id='qty-list-grow' onKeyDown={handleQtyListKeyDown}>
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
        <Button
          variant='outlined'
          style={{ borderRadius: 0, borderColor: 'red' }}
          onClick={postToCart}
        >
          Add to Cart
        </Button>
      </CardContent>
    </div>
  );
}

export default Cart;