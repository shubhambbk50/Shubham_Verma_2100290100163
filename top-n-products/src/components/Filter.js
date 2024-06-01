import React from 'react';

const Filter = ({ onFilterChange }) => {
  return (
    <div className="filter">
      <select onChange={e => onFilterChange(e.target.value, 'category')}>
        <option value="">Category</option>
        <option value="Phone">Phone</option>
        <option value="Laptop">Laptop</option>
        {/* Add other categories */}
      </select>
      <select onChange={e => onFilterChange(e.target.value, 'company')}>
        <option value="">Company</option>
        <option value="AMZ">Amazon</option>
        <option value="FLP">Flipkart</option>
        {/* Add other companies */}
      </select>
      {/* Add other filters like price range, rating, availability */}
    </div>
  );
};

export default Filter;
