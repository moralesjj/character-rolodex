import React from 'react';

import './search-box.styles.css';

// functional component
// no state or constructor or life cycle methods
// meant to only render html (get some props, return html)
// easier to read, smaller to manage
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className = 'search'
        type= 'search'
        placeholder= {placeholder}
        onChange={handleChange}
    />
)