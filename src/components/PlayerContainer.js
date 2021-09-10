import React, {useEffect, useState} from 'react';
import { BASE_URL } from '../constrains/index.js';
import Player from "./Player.js";
import PlayerForm from './PlayerForm.js';

function PlayerContainer() {

    const [players, setPlayers] = useState(null)

    //READ

    useEffect(() => {
        fetch(BASE_URL + 'players')
        .then(res => res.json())
        .then(setPlayers)
    }, [])

    function populatePlayers() {
        return players.map((player) => (
        <Player player={player} key={player.id}/>));
    }
    
    //CREATE

    function handleAddPlayer(newPlayer){
        const updatedPlayer = ([...players, newPlayer])
        return setPlayers(updatedPlayer)
    }

    return(
        <div>
            <div className="player-form"><PlayerForm handleAddPlayer={handleAddPlayer}/></div>
            <div className="player-container">{players && populatePlayers()}</div>
        </div>
    )


}

export default PlayerContainer