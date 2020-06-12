import React, { Component } from 'react';
import UserContext from '../../Context/UserContext';
import Card from '../Card/Card';
import './Cards.css';

export default class Cards extends Component {
    static contextType = UserContext

    render() {
        const games = this.context.games || []
        return (
            <ul className='cardsContainer'>
                {games.length > 0 && 
                games.map(game => <Card key={game.id} game={game} />)}
            </ul>
        )
    }
}