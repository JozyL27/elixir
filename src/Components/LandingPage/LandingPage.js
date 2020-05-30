import React from 'react';
import NavBar from '../NavBar/NavBar';
import Cards from '../Cards/Cards';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

export default function LandingPage() {
    return (
        <div className='landingContainer'>
        <div className='sectionOne'>
            <SearchBar />
            <ul>
                <Link></Link>
                <Link></Link>
                <Link></Link>
                <Link></Link>
            </ul>
        </div>
            <div className='sectionTwo'>
                <NavBar />
                <Cards />
            </div>
        </div>
    )
}