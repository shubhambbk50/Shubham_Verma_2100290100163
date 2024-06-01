import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <Link to={`/product/${product.id}`}>
            <h2>{product.name}</h2>
            <p>{product.company}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
