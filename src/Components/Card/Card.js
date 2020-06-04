import React, { useContext } from 'react';
import UserContext from '../../Context/UserContext';


export default function Card(props) {
    const user = useContext(UserContext)
    const {games} = user
    const game = games.find(el => el.id === Number(props.match.params.gameId)) || {}


        return (
            <section>
                <h3 style={{ color: 'white'}}>{game.name}</h3>
            </section>
        )
}