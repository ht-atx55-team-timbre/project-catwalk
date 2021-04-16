import React from 'react';

const ProductDescription = ({ product }) => (
  <div className="description">
    <h4>{product.description}</h4>
    <p>{product.description}</p>
  </div>
);

export default ProductDescription;