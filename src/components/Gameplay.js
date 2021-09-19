import React, { useState } from 'react';
import '../styles/Gameplay.css'


    
function Gameplay({gameplay, updateGameplay, deleteGameplay}) {

    const [newGameplay, setNewGameplay] = useState({...gameplay});
    const [editMode, setEditMode] = useState(false);
    const [like, setLike] = useState(0);

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

    function handleClickLike(){
        setLike(like + 1)
    }

    return (
        <div className='gameplay-card'>
           <p>{gameplay.title}</p>
           <p>Likes: {gameplay.likes = like}</p>
           <button onClick={handleClickLike}>Add Like</button>
           <p>Game Time: {gameplay.game_time}</p>
           <iframe src={gameplay.video_url} width="600px" height="400px" title={gameplay.title}></iframe>
           <div className="gameplay-game-player">
              <div className='gameplay-game-card'>
                    <p>Game Name: <label>{gameplay.game.name}</label></p>
                    <p>Category: <label>{gameplay.game.category}</label></p>
                    <img src={gameplay.game.img_url} alt={gameplay.game.name}></img>
              </div>

               <div className='gameplay-player-card'>
                    <p>Player Name: <label>{gameplay.player.name}</label></p>
                    <p>Country: <label>{gameplay.player.country}</label></p>
                    <img src={gameplay.player.photo_url} alt={gameplay.player.name}></img>
                </div> 
           </div>
           
           
           {editMode && (
               <>
                <form onSubmit={handleUpdate}>
                    <input name="title" value={newGameplay.title} onChange={handleChange}></input><br/>
                    <input name="likes" value={newGameplay.likes} onChange={handleChange}></input><br/>
                    <input name="game_time" value={newGameplay.game_time} onChange={handleChange}></input><br/>
                    <input name="video_url" value={newGameplay.video_url} onChange={handleChange}></input><br/>
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