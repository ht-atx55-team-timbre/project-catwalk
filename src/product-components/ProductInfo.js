import React from 'react';
// import App from '../App';

const ProductInfo = ({ product }) => (
    <div>
      <div className="category">{product.category}</div>
      <div className="product-name">{product.name}</div>
      <div className="price">{product.default_price}</div>
    </div>
  )

export default ProductInfo;