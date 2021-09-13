import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Console({console, updateConsole, deleteConsole}) {

    const [newConsole, setNewConsole] = useState({...console});
    const [editMode, setEditMode] = useState(false);

    function handleChange(e){
        const updateValue = {...newConsole}
        updateValue[e.target.name] = e.target.value
        setNewConsole(updateValue)
    }

    function toggleEdit(){
        setEditMode(!editMode);
    }

    function handleUpdate(e){
        e.preventDefault();
        updateConsole(newConsole);
        setEditMode(false);
    }

    return (
        <div>
            <Link to={`/Console/${console.id}`}>
                <p>{console.name}</p>
           </Link>
           <p>Cost: {console.cost}</p>
           <p>Storage Capacity: {console.storage_space}</p>
           <img src={console.img_url} alt="img_game"></img>
           {editMode && (
               <>
                <form onSubmit={handleUpdate}>
                    <input name="name" value={newConsole.name} onChange={handleChange}></input><br/>
                    <input name="cost" value={newConsole.cost} onChange={handleChange}></input><br/>
                    <input name="storage capacity" value={newConsole.storage_capacity} onChange={handleChange}></input><br/>
                    <input name="img_url" value={newConsole.img_url} onChange={handleChange}></input><br/>
                    <button type="submit">Update Console</button><br/>
                    <button onClick={() => deleteConsole(console)}>Delete Console</button>
                </form>
               </>
           )}
           <button onClick={toggleEdit}>Edit</button>
        </div>
    )
}

export default Console