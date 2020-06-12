import React, { useContext } from 'react';
import UserContext from '../../Context/UserContext';
import './GamePage.css';

export default function GamePage(props) {
    const user = useContext(UserContext)
    const {games, genres} = user
    const game = games.find(el => el.id === Number(props.match.params.gameId)) || {}
    console.log(game)
    console.log(genres)
    // const gameGenres = genres.map(el => game.genres.find())
    // console.log(gameGenres)


        return (
            <section className='cardContainer'>
                <h3 className='cardName'>{game.name}</h3>
                {game.cover ? 
                <img src={game.cover.url.replace('thumb', 'cover_big')} 
                alt='cover art' />
                : <p>no cover art available.</p>}
                <p className='cardSummary'>Summary: {game.summary}</p>
            </section>
        )
}