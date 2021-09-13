import React, {useEffect, useState} from 'react';
import { BASE_URL } from '../constrains/index.js';
import Game from "./Game.js";
import "../styles/GameContainer.css"


function GameContainer(){

    const [games, setGames] = useState([])
    const [currentSearch, setCurrentSearch] = useState("")
    //READ

    useEffect(() => {
        fetch(BASE_URL + 'games')
        .then(res => res.json())
        .then(setGames)
    }, [])

    const gameDisplayed = games
    .filter((game)=> {
        return (
        game.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
        game.category.toLowerCase().includes(currentSearch.toLowerCase())
        )
    })

    function populateGames() {
        return gameDisplayed.map((game) => (
        <Game game={game} key={game.id} updateGame={updateGame} deleteGame={deleteGame}/>));
    }

    function handleChange(e){
        setCurrentSearch(e.target.value)
    }
    

    //UPDATE

    function updateGame(game){
        fetch(BASE_URL + 'games/' + game.id, {
            method: "PATCH",
            body: JSON.stringify(game),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
        });
        const newGame = games.map((p) =>{
            if (p.id === game.id) {
                p = game;
            }
            return p
        })
        setGames(newGame)
    }

    //DELETE

    function deleteGame(game){
        fetch(BASE_URL + 'games/' + game.id, {
            method: "DELETE"
        })
        const newGame = games.filter(p => p.id!== game.id)
        setGames(newGame)
    }

    return(
        <div className="all-games-container">
            <label>Find by Name or Category: </label>
            <input onChange={handleChange} value={currentSearch}></input>
            <div className="game-container">{games && populateGames()}</div>
        </div>
    )
}
export default GameContainer