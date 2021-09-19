import React, { useState } from 'react';
import '../styles/Game.css'

function Game({game, updateGame, deleteGame}) {

    const [newGame, setNewGame] = useState({...game});
    const [editMode, setEditMode] = useState(false);

    function handleChange(e){
        const updateValue = {...newGame}
        updateValue[e.target.name] = e.target.value
        setNewGame(updateValue)
    }

    function toggleEdit(){
        setEditMode(!editMode);
    }

    function handleUpdate(e){
        e.preventDefault();
        updateGame(newGame);
        setEditMode(false);
    }

    return (
        <div className='game-card'>
           <p>{game.name}</p>
           <p>Category: {game.category}</p>
           <p>Cost: {game.cost}</p>
           <p>Rate {game.rate}</p>
           <p>Average Length: {game.average_length}</p>
           <p>Storage Space: {game.storage_space}</p>
           <img src={game.img_url} alt="img_game"></img><br/>
           {editMode && (
               <>
                <form onSubmit={handleUpdate}>
                    <input name="name" value={newGame.name} onChange={handleChange}></input><br/>
                    <input name="cost" value={newGame.cost} onChange={handleChange}></input><br/>
                    <input name="rate" value={newGame.rate} onChange={handleChange}></input><br/>
                    <input name="average length" value={newGame.average_length} onChange={handleChange}></input><br/>
                    <input name="storage space" value={newGame.storage_space} onChange={handleChange}></input><br/>
                    <input name="img_url" value={newGame.img_url} onChange={handleChange}></input><br/>
                    <button type="submit">Update Game</button><br/>
                    <button onClick={() => deleteGame(game)}>Delete Game</button>
                </form>
               </>
           )}
           <button onClick={toggleEdit}>Modify Game</button>
        </div>
    )
}

export default Game