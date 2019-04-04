import React from 'react';
import serach from './Searchbox.css';
const SearchBox = ({searchfiled, search}) => {

    return (
        <input type='search' placeholder="Search some thing" onChange={search}/>
    );
}


export default SearchBox;