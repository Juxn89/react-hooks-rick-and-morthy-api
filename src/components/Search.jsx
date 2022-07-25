import React from 'react'

export const Search = ({Search, searchInput, handleSearch}) => {
  return (
    <div className='Search'>
        <input ref={ searchInput } className='txt-search' type='text' placeholder='Search a character...' onChange={ handleSearch } value={ Search }/>
    </div>
  )
}
