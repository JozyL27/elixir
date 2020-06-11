import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

export default function Header() {
    return (
        <header>
            <Link to='/' className='headerLink'>
                <h1 className='headerText'>Elixir</h1>
            </Link>
            <SearchBar />
        </header>
    )
}