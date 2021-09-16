import React, {useEffect, useState} from 'react';
import { BASE_URL } from '../constrains/index.js';
import Player from "./Player.js";
import PlayerForm from './PlayerForm.js';
import  '../styles/PlayerContainer.css';

function PlayerContainer() {

    const [players, setPlayers] = useState([])
    const [currentSearch, setCurrentSearch] = useState("")
    //READ

    useEffect(() => {
        fetch(BASE_URL + 'players')
        .then(res => res.json())
        .then(setPlayers)
    }, [])

    const playerDisplayed = players
    .filter((player)=> {
        return (
        player.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
        player.country.toLowerCase().includes(currentSearch.toLowerCase())
        )
    })

    function populatePlayers() {
        return playerDisplayed.map((player) => (
        <Player player={player} key={player.id} updatePlayer={updatePlayer} deletePlayer={deletePlayer}/>));
    }

    function handleChange(e){
        setCurrentSearch(e.target.value)
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
                "Accept": "application/json",
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
        fetch(BASE_URL + 'players/' + player.id, {
            method: "DELETE"
        })
        const newPlayer = players.filter(p => p.id!== player.id)
        setPlayers(newPlayer)
    }

    return(
        <div className="all-players-container">
            <div className="player-form-container"><PlayerForm handleAddPlayer={handleAddPlayer}/></div><br/>
            <div className="player-search">
               <label>Find by Name or Country: </label>
               <input onChange={handleChange} value={currentSearch}></input> 
            </div>
            <div className="player-container">{players && populatePlayers()}</div>
        </div>
    )


}

export default PlayerContainer