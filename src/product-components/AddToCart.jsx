import React from 'react';
import {
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


export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartContents: [],
      sku: null,
      quantity: null,
      anchorEl: null,
    }
    this.addToCart = this.addToCart.bind(this);
    this.handleSKUChange = this.handleSKUChange.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
    this.createQuantity = this.createQuantity.bind(this);
    this.getCartContents = this.getCartContents.bind(this);
    this.postToCart = this.postToCart.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.getCartContents();
  }

  handleClick(e) {
    this.setState({
      anchorEl: e.target
    })
  }

  handleClose() {
    this.setState({
      anchorEl: null
    })
  }

  addToCart(e) {
    e.preventDefault();
    this.postToCart();
  };

  handleSKUChange(e) {
    this.setState({
      sku: e.target.id
    });
    console.log('sku change', this.state.sku);
  }

  handleCountChange(e) {
    console.log('count change', this.state.count)
    this.setState({
      count: e.target.id
    })
  }

  createQuantity(quantity) {
    var array = [];
    for (var i = 1; i <= quantity; i++) {
      array.push(i);
    }
    return array;
  }

  getCartContents() {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/cart`, {
        headers: {
          Authorization: API_KEY
        }
      })
      .then(response => {
        this.setState({
          cartContents: response.data
        });
        console.log(this.state.cartContents);
      })
      .catch(err => console.error(err));
  }

  postToCart() {
    if (this.state.sku && this.state.count) {
      axios({
        method: 'post',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/cart`,
        data: {
          sku_id: this.state.sku,
          count: this.state.count
        },
        headers: {
          Authorization: API_KEY
        }
      })
        .then(res => {
          console.info(res.body);
          this.getCartContents();
        })
        .catch(err => console.error(err));
    }
  }

  render() {
    var skus = this.props.currentStyle.skus;
    return (
      <div className='root' display='inline'>
        <CardContent>
          {/* <Typography> */}
          {/* <form> */}
          {/* <select id="size" name="size" onChange={this.handleSKUChange}> */}
          <Button
            variant='contained'
            aria-controls='select-size'
            aria-haspopup='true'
            onClick={this.handleClick}
          >
            Select A Size
          </Button>
          <Menu
            id='select-size'
            anchorEl={this.state.anchorEl}
            keepMounted
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
          >
            {Object.keys(skus).map((sku, idx) => {
              return (
                <MenuItem
                  key={idx}
                  onClick={this.handleSKUChange}
                  id={sku}
                >
                  {skus[sku].size}
                </MenuItem>
                // <span key={idx} id={sku} onChange={this.handleSKUChange}>{skus[sku].size}</span>
              );
            })}
          </Menu>
          {/* <option value="default">Select A Size</option>
                {Object.keys(skus).map((sku, idx) => {
                  return (
                    <option key={idx} value={sku}>{skus[sku].size}</option>
                    // <span key={idx} id={sku} onChange={this.handleSKUChange}>{skus[sku].size}</span>
                  );
                })}
              </select>
              <select id="qty" name="qty" onChange={this.handleCountChange}> */}
          {this.state.sku ?
            <div className='root'>
              <Button
                aria-controls='select-qty'
                aria-haspopup='true'
                color='primary'
                onClick={this.handleClick}>
                Select Qty
              </Button>
              <Menu
                id='select-qty'
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
              >
                {this.createQuantity(skus[this.state.sku].quantity).map((number, idx) => {
                  return (
                    <MenuItem
                      key={idx}
                      onClick={this.handleCountChange}
                      id={number}
                    >
                      {number}
                    </MenuItem>
                  )
                })}
              </Menu>
            </div> :
            // this.createQuantity(skus[this.state.sku].quantity).map((number, idx) => {
            //   return (
            //     <option key={idx} value={number}>{number}</option>
            //   )
            // })
            <Button
              variant='contained'
              color='primary'
              disabled
            >
              Select Qty
            </Button>
          }
          {/* </select> */}
          <Button
            variant='contained'
            color='primary'
            onClick={this.addToCart}
          >
            Add To Cart
          </Button>
          {/* <input type="submit" id="add-cart" value="Add To Cart" onClick={this.addToCart} /> */}
          {/* <button type="button" id="view-cart">View Cart</button> */}
          {/* </form> */}
          {/* </Typography> */}
        </CardContent>
      </div>
    )
  }
};