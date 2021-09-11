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
        <Player player={player} key={player.id} updatePlayer={updatePlayer} deletePlayer={deletePlayer}/>));
    }
    
    //CREATE

    function handleAddPlayer(newPlayer){
        const updatedPlayer = ([...players, newPlayer])
        return setPlayers(updatedPlayer)
    }

    //UPDATE

    function updatePlayer(player){
        fetch(BASE_URL + 'players/' + player.id, {
            method: "PATCH",
            body: JSON.stringify(player),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
        });
        const newPlayer = players.map((p) =>{
            if (p.id === player.id) {
                p = player;
            }
            return p
        })
        setPlayers(newPlayer)
    }

    //DELETE

    function deletePlayer(player){
        fetch(BASE_URL + 'players' + player.id, {
            method: "DELETE"
        })
        const newPlayer = players.filter(p => p.id!== player.id)
        setPlayers(newPlayer)
    }

    return(
        <div>
            <div className="player-form"><PlayerForm handleAddPlayer={handleAddPlayer}/></div>
            <div className="player-container">{players && populatePlayers()}</div>
        </div>
    )


}

export default PlayerContainer