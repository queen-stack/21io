import React from 'react';

const SearchInput = (props) => {

  return (
    <div>
      <input
      className='searchInput'
      value={props.value}
      onChange={(event) => props.setSearchedTitles(event.target.value)}
      placeholder='Search for Movie Titles'
      >
      </input>
    </div>
  );
}

export default SearchInput;