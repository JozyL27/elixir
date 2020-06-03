import React, { Component } from 'react';
import API from '../../api';
import './Cards.css'

export default class Cards extends Component {
   state = {games: [], genres: [], error: null}

    async componentDidMount() {
        this.setState({error: null})
        const res = await API.get('/app-load')
        .catch(e => this.setState({ error: e.message }))
        this.setState({ games: res.data.gameData, 
            genres: res.data.genreData })
    }

    render() {
        const {games} = this.state
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
                    <div className='cardOverlay'>
                        <h3 className='gameTitle'>{game.name}</h3>
                        <p className='gameSummary'>{game.summary}</p>
                    </div>
                    {game.cover ? 
                    null 
                    : <p className='unavailable'>
                        no cover art available</p>}
                </li>)}
            </ul>
        )
    }
}