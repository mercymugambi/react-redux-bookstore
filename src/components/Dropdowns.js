import { PropTypes } from 'prop-types';
import { useState } from 'react';

const Dropdowns = ({ onCategoryChange }) => {
  const [category, setCategory] = useState('');

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    onCategoryChange(selectedCategory);
  };

  return (
    <select className="category" value={category} onChange={handleCategoryChange} placeholder="Category">
      <option value="Select">Select Categories</option>
      <option value="Action">Action</option>
      <option value="Science">Science Fiction</option>
      <option value="Economy">Economy</option>
    </select>
  );
};
Dropdowns.propTypes = { onCategoryChange: PropTypes.func.isRequired };
export default Dropdowns;
