import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>{product.company}</p>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <p>{product.rating}</p>
      <p>{product.discount}</p>
      <p>{product.availability}</p>
    </div>
  );
};

export default ProductDetails;
