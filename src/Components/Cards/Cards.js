import React, { Component } from 'react';
import API from '../../api'

export default class Cards extends Component {
   state = {games: [], genres: []}

    async componentDidMount() {
        const res = await API.get('/app-load')
        this.setState({ games: res.data.gameData, 
            genres: res.data.genreData })
    }

    render() {
        console.log(this.state)
        const {games} = this.state
        return (
            <ul className='cardsContainer'>
                {games.length > 0 && 
                games.map(game => 
                <li key={game.id} className='card'>
                    <h3>{game.name}</h3>
                    {game.cover ? 
                    <img src={game.cover.url} alt='game' /> 
                    : <p>no cover art available</p>}
                </li>)}
            </ul>
        )
    }
}