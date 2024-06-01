import React, { useState, useEffect } from 'react';
import ProductDetails from '../components/ProductDetails';
import { useParams } from 'react-router-dom';
import productService from '../services/productService';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    productService.getProductById(id).then(data => setProduct(data));
  }, [id]);

  return (
    <div className="product-page">
      {product && <ProductDetails product={product} />}
    </div>
  );
};

export default ProductPage;
