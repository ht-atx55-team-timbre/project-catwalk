import React from 'react';

const ProductDescription = ({ product }) => (
  <div className="description">
    <h4>{product.slogan}</h4>
    <p>{product.description}</p>
  </div>
);

export default ProductDescription;