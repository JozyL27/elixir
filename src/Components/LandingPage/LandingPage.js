import React from 'react';
import NavBar from '../NavBar/NavBar';
import Cards from '../Cards/Cards';
// import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './LandingPage.css'

export default function LandingPage() {
    return (
        <div className='landingContainer'>
        <div className='sectionOne'>
            <SearchBar />
            <ul className='topNavContainer'>
            <li><button>button 1</button></li>
            <li><button> button 2</button></li>
            <li><button>button 3</button></li>
            <li><button> button 4</button></li>
            </ul>
        </div>
            <div className='sectionTwo'>
                <NavBar />
                <Cards />
            </div>
        </div>
    )
}