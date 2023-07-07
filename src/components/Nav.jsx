import SearchBar from './SearchBar';
import React from 'react';

export default function Nav(props) {
    return (
        <div>
            <SearchBar onSearch={props.onSearch} /> 
        </div>
    )
}