import React, {useEffect, useState} from 'react';
import { BASE_URL } from '../constrains/index.js';
import Player from "./Player.js"

function PlayerContainer() {

    const [players, setPlayers] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'players')
        .then(res => res.json())
        .then(setPlayers)
    }, [])

    function populatePlayers() {
        return players.map((player) => (
        <Player player={player} key={player.id}/>));
    }

    return(
        <div>
            <div className="player-container">{players && populatePlayers()}</div>
        </div>
    )


}

export default PlayerContainer