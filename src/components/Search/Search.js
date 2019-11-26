import React from 'react';

import FilterButton from '../FilterButton/FilterButton.js'

import './Search.sass'

const Search = () => {
  const searchText = 'search'
  return(
    <div className='search'>
      <input className='form-control' placeholder={searchText}/>
      <FilterButton />
    </div>
    )
}

export default Search
