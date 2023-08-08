import React from 'react';
import { Input } from '../stylesComponents/FilterStyled';
import PropTypes from 'prop-types';

function Filter({ filter, setFilter }) {
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <Input
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
    />
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
