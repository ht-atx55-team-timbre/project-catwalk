import React from 'react';
import { Paper } from '@material-ui/core';
import axios from 'axios';
import API_KEY from '../config.js';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartContents: [],
      sku: null,
      quantity: null
    }
    this.addToCart = this.addToCart.bind(this);
    this.handleSKUChange = this.handleSKUChange.bind(this);
    this.createQuantity = this.createQuantity.bind(this);
  }

  componentDidMount() {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/cart`, {
        headers: {
          Authorization: API_KEY
        }
      })
      .then(response => {
        this.setState({
          cartContents: response.data
        })
      })
      .catch(err => console.error(err));
  }

  addToCart(e) {
    e.preventDefault();
    axios
      .post(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/cart`, {
        sku_id: this.state.sku
      })
      .then(response => response.status(201).send('CREATED'))
      .catch(err => console.error(err));

    this.setState({
      cartContents: this.state.cartContents.push(e.target.value),
      cartEmpty: !this.state.cartEmpty
    });
  };

  handleSKUChange(e) {
    this.setState({
      sku: e.target.value
    });
  }

  createQuantity(quantity) {
    var array = [];
    for (var i = 1; i <= quantity; i++) {
      array.push(i);
    }
    return array;
  }

  render() {
    var skus = this.props.currentStyle.skus;
    return (
      <Paper elevation={0} className="cart">
        <form>
          <select id="size" name="size" onChange={this.handleSKUChange}>
            <option value="default">Select A Size</option>
            {Object.keys(skus).map((sku, idx) => {
              return (
                <option key={idx} value={sku}>{skus[sku].size}</option>
              );
            })}
          </select>
          {this.state.sku ?
            <select id="qty" name="qty">
              <option value="default">qty</option>
              {this.createQuantity(skus[this.state.sku].quantity).map((number, idx) => {
                return (
                  <option key={idx} value={number}>{number}</option>
                )
              })}
            </select>
            : null
          }
          <br/>
          <input type="submit" id="add-cart" value="Add To Cart" onClick={this.addToCart} />
          <button type="button" id="view-cart">View Cart</button>
        </form>
      </Paper>
    )
  }
};