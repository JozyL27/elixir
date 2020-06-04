import React, { Component } from 'react';
import UserContext from '../../Context/UserContext';
import './Cards.css';

export default class Cards extends Component {
   static contextType = UserContext

    render() {
        const games = this.context.games || []
        return (
            <ul className='cardsContainer'>
                {games.length > 0 && 
                games.map(game => 
                <li key={game.id} className='card' style={{
                    background: game.cover ? 
                    `url(${game.cover.url.replace('thumb', 'cover_big')})` : 'black',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% auto',
                    backgroundPosition: 'center',
                }}>
                    <a href={`/game/${game.id}`}>
                    <div className='cardOverlay'>
                        <h3 className='gameTitle'>{game.name}</h3>
                        <p className='gameSummary'>{game.summary}</p>
                    </div>
                    </a>
                    {game.cover ? 
                    null 
                    : <p className='unavailable'>
                        no cover art available</p>}
                </li>)}
            </ul>
        )
    }
}