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
    this.handleCountChange = this.handleCountChange.bind(this);
    this.createQuantity = this.createQuantity.bind(this);
    this.getCartContents = this.getCartContents.bind(this);
    this.postToCart = this.postToCart.bind(this);
  }

  componentDidMount() {
    this.getCartContents();
  }

  addToCart(e) {
    e.preventDefault();
    this.postToCart();
  };

  handleSKUChange(e) {
    this.setState({
      sku: e.target.value
    });
  }

  handleCountChange(e) {
    this.setState({
      count: e.target.value
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
        })
      })
      .catch(err => console.error(err));
  }

  postToCart() {
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
      // .then(res => console.info(res))
      .catch(err => console.error(err));
  }

  render() {
    console.log('on re-render', this.state.cartContents);
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
          <select id="qty" name="qty" onChange={this.handleCountChange}>
            {this.state.sku ?
              this.createQuantity(skus[this.state.sku].quantity).map((number, idx) => {
                return (
                  <option key={idx} value={number}>{number}</option>
                )
              })
              : <option key="default" value="default">-</option>
            }
          </select>
          <br />
          <input type="submit" id="add-cart" value="Add To Cart" onClick={this.addToCart} />
          <button type="button" id="view-cart">View Cart</button>
        </form>
      </Paper>
    )
  }
};






// axios.put(url, { report: false }, headersAndParams)
// .then(response => {
//   setIsClicked(false);
//   setReportText('Report');
// })
// .catch(err => {
//   console.log(err, 'error marking answer as unreported');
// })sss