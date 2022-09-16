import React from 'react';
import modul1e from './Search.module.css'

const Search = ({ filter, setFilter }) => {
    return (
        <input className={modul1e.input}
            value={filter.search}
            onChange={e => setFilter({...filter, search: e.target.value})}
            type="text"
            placeholder="Поиск"
        />
    );
};

export default Search;