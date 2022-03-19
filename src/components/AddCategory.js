import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('Hola Mundo');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cat) => [...cat, inputValue]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>AddCategory</h2>
      <input
        type='text'
        placeholder='Ingresa tu búsqueda'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = { 
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;