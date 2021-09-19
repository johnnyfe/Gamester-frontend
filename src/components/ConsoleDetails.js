import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import { BASE_URL } from "../constrains";
import { useHistory } from "react-router";
import GameForm from './GameForm';
import GameDetails from './GameDetails';
import '../styles/ConsoleDetails.css'

function ConsoleDetails(){

    const [console, setConsole] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("ALL")

    const { id } =  useParams();
    const history = useHistory();

    useEffect(()=> {
        fetch(BASE_URL + 'consoles/'+ id)
        .then((res) => { 
            if(!res.ok){
                throw Error(res.statusText)
            }
            return res.json()
        })
        .then((json) => {setConsole(json) })
        .catch(error => {
            history.push('/')
        })
    }, [id, history]);

    function uniqueCategories(){
        if(console !== null){
            const category = console.games.map((game) => game.category);
        const uniqueCategory = [...new Set(category)]
        return uniqueCategory
        }
    }

    function populateCategoriesOptions(){
        return uniqueCategories().map((category) => (
            <option key={category.toString()} value={category}>{category}</option>
        ))
    }
    
    function handleSelectCategory(e){
        setSelectedCategory(e.target.value)
    }

    function filteredGames(){
        if(selectedCategory === "ALL"){
            return console.games;
        }
        return console.games.filter(
            (game) => game.category === selectedCategory
        );
    }

    function createGame(gamesDetails){
        const newGame ={
            ...gamesDetails,
            console_id: id,
        }

        fetch(BASE_URL + 'games', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
            body: JSON.stringify(newGame)
        })
        .then((r) => r.json())
        .then((json) => {
            const newConsole = {...console, games: [...console.games, json] };
            setConsole(newConsole)
        })
    }

    return (
        <div className="console-details-container">
            <div className="game-form-container"><GameForm createGame={createGame} /> </div>
            {console && (
                <>
                <div className="console-selected">
                    <h2>VideoGame Console</h2>
                    <p>Console: {console.name}</p>
                    <p>Cost: {console.cost} dollars</p>
                    <p>Storage Capacity: {console.storage_capacity} GBs</p>
                    <img src={console.img_url} alt={console.name}></img>
                </div>
                <h2>List of VideoGames</h2>
                <div className="game-selected">
                    <select value={selectedCategory} onChange={handleSelectCategory}>
                        <option value="ALL">Categories</option>
                        {populateCategoriesOptions()}
                    </select>
                    <div className = "game-card-container">
                        {filteredGames().map((game)=>(
                            <GameDetails key={game.id} game={game} />
                        ))}
                    </div>
                </div>
                
                </>
            )}
        </div>
    )

}

export default ConsoleDetails