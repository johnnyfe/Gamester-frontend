import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/Game.css'


    
function Gameplay({gameplay, updateGameplay, deleteGameplay}) {

    const [newGameplay, setNewGameplay] = useState({...gameplay});
    const [editMode, setEditMode] = useState(false);

    function handleChange(e){
        const updateValue = {...newGameplay}
        updateValue[e.target.name] = e.target.value
        setNewGameplay(updateValue)
    }

    function toggleEdit(){
        setEditMode(!editMode);
    }

    function handleUpdate(e){
        e.preventDefault();
        updateGameplay(newGameplay);
        setEditMode(false);
    }

    return (
        <div className='gameplay-card'>
            <Link to={`/gameplays/${gameplay.id}`}>
                <p>{gameplay.title}</p>
           </Link>
           <p>Likes: {gameplay.likes}</p>
           <p>Game Time: {gameplay.game_time}</p>
           <iframe src={gameplay.video_url} title={gameplay.title}></iframe>
           {editMode && (
               <>
                <form onSubmit={handleUpdate}>
                    <input name="title" value={newGameplay.title} onChange={handleChange}></input><br/>
                    <input name="likes" value={newGameplay.likes} onChange={handleChange}></input><br/>
                    <input name="game_time" value={newGameplay.game_time} onChange={handleChange}></input><br/>
                    <input name="vide_url" value={newGameplay.video} onChange={handleChange}></input><br/>
                    <button type="submit">Update Gameplay</button><br/>
                    <button onClick={() => deleteGameplay(gameplay)}>Delete Gameplay</button>
                </form>
               </>
           )}
           <button onClick={toggleEdit}>Modify Gameplay</button>
        </div>
    )
}
export default Gameplay;