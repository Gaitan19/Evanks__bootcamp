import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import Button from '../Button';

const Search = (props) => {
  const { customClass, placeholder, handleFilter } = props;

  const [filterText, setFilterText] = useState('');

  const handleOnchange = ({ target }) => {
    const { value } = target;
    setFilterText(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleFilter(filterText);
    }
  };

  const handlerOnclick = () => {
    handleFilter(filterText);
  };

  return (
    <div className={customClass}>
      <input
        className={`${customClass}-input`}
        placeholder={placeholder}
        type="text"
        value={filterText}
        onChange={handleOnchange}
        onKeyDown={handleKeyDown}
      />
      <Button customClass="btn Button" onClick={handlerOnclick}>
        <FaSearch />
      </Button>
    </div>
  );
};

Search.propTypes = {
  customClass: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleFilter: PropTypes.func,
};

Search.defaultProps = {
  placeholder: '',
  handleFilter: () => {},
};

export default Search;
