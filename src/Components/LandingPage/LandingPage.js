import React from 'react';
import NavBar from '../NavBar/NavBar';
import Cards from '../Cards/Cards';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div className='landingContainer'>
            <NavBar />
            <Cards />
        </div>
    )
}