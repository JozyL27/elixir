import React from 'react';
import NavBar from '../NavBar/NavBar';
import Cards from '../Cards/Cards';
import {Link} from 'react-router-dom';

export default function LandingPage() {
    return (
        <div className='landingContainer'>
        <div className='sectionOne'>
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