import React, { Component } from 'react';
import UserContext from '../../Context/UserContext';
import './Card.css';
export default class Card extends Component {
    static contextType = UserContext

    cardClickHandler = (e) => {
        //* Get ID from value attribute of clicked element
        const gameId = parseInt(e.currentTarget.attributes.id.value);
        //* Get parent card from
        console.log(gameId);
	}
	
	render() {
		const game = this.props.game;
		return (
			<li key={game.id} id={game.id} className='card'
                    onClick={this.cardClickHandler}
                    style={{
                        background: game.cover ? 
                        `url(${game.cover.url.replace('thumb', 'cover_big')})` : 'black',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'auto 100%',
                        backgroundPosition: 'center',
                    }}  
                >
                    <div className='cardOverlay'>
                        <h3 className='gameTitle'>{game.name}</h3>
                        <p className='gameSummary'>{game.summary}</p>
                    </div>
                    {game.cover ? 
                    null 
                    : <p className='unavailable'>
                        no cover art available</p>}
                </li>
		)
	}
}
