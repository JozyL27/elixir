import React, { Component } from 'react';
import UserContext from '../../Context/UserContext';
import './Card.css';
export default class Card extends Component {
    static contextType = UserContext
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    cardClickHandler = () => {
        this.setState({
            active: true
        });
    };
    
    activeClickHandler = () => {
        this.setState({
            active: false
        });
    };
	
	render() {
        console.log(this.state.active);
        const game = this.props.game;
		return (
            this.state.active ?
            //* Active Card
            <>
                <div className='background' onClick={this.activeClickHandler}>
                </div>
                <li key={game.id} id={game.id} 
                    className='active-card card'
                    onClick={null}
                >
                    {game.cover ? 
                    <img src={game.cover.url.replace('thumb', 'cover_big')} className='cover' alt={`${game.name} Cover Art`}/>
                    : <p className='unavailable'>
                        no cover art available</p>}
                </li>
            </>
            :
            //* Inactive Card
            <li key={game.id} id={game.id} 
                className='card'
                onClick={this.cardClickHandler}
            >
                {game.cover ? 
                <img src={game.cover.url.replace('thumb', 'cover_big')} className='cover' alt={`${game.name} Cover Art`}/>
                : <p className='unavailable'>
                    no cover art available</p>}
                <div className='cardOverlay'>
                    <h3 className='gameTitle'>{game.name}</h3>
                    <p className='gameSummary'>{game.summary}</p>
                </div>
            </li>
		);
	};
}
