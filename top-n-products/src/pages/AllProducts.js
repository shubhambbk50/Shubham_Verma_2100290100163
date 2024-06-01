import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import productService from '../services/productService';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    productService.getProducts(filters).then(data => setProducts(data));
  }, [filters]);

  const handleFilterChange = (value, filterType) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };

  return (
    <div className="all-products">
      <Filter onFilterChange={handleFilterChange} />
      <ProductList products={products} />
    </div>
  );
};

export default AllProducts;
