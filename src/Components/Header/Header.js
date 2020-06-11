import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

export default function Header() {
    return (
        <>
        <Link to='/' className='headerLink'>
            <h1 className='header' 
            style={{color: 'white', 
            textAlign: 'center', 
            marginTop: '30px', 
            fontSize: '40px'}}
            >Elixir</h1>
        </Link>
        <SearchBar />
        </>
    )
}