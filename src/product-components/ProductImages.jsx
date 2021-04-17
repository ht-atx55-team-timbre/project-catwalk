import React from 'react';

const ProductImages = ({ currentProduct }) => (
  <div className="description">
    <h4>{currentProduct.slogan}</h4>
    <p>{currentProduct.description}</p>
  </div>
);

export default ProductImages;