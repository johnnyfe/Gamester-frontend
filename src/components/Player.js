import React, { useState } from 'react';
import '../styles/Player.css'

function Player({player, updatePlayer, deletePlayer}) {

    const [newPlayer, setNewPlayer] = useState({...player});
    const [editMode, setEditMode] = useState(false);

    function handleChange(e){
        const updateValue = {...newPlayer}
        updateValue[e.target.name] = e.target.value
        setNewPlayer(updateValue)
    }

    function toggleEdit(){
        setEditMode(!editMode);
    }

    function handleUpdate(e){
        e.preventDefault();
        updatePlayer(newPlayer);
        setEditMode(false);
    }

    return (
        <div className="player-card">
           <p>{player.name}</p>
           <p>Age: {player.age}</p>
           <p>Years of Experience: {player.years_of_experience}</p>
           <p>Country: {player.country}</p>
           <img src={player.photo_url} alt="photo_player"></img>
           {editMode && (
               <>
                <form onSubmit={handleUpdate}>
                    <input name="name" value={newPlayer.name} onChange={handleChange}></input><br/>
                    <input name="age" value={newPlayer.age} onChange={handleChange}></input><br/>
                    <input name="country" value={newPlayer.country} onChange={handleChange}></input><br/>
                    <input name="years_of_experience" value={newPlayer.years_of_experience} onChange={handleChange}></input><br/>
                    <input name="img_url" value={newPlayer.photo_url} onChange={handleChange}></input><br/>
                    <button type="submit">Update Player</button><br/>
                    <button onClick={() => deletePlayer(player)}>Delete Player</button>
                </form>
               </>
           )}
           <button onClick={toggleEdit}>Edit</button>
        </div>
    )
}

export default Player