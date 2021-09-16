import React, { useState } from "react";
import { BASE_URL } from "../constrains/index"
import '../styles/PlayerForm.css'

function PlayerForm({handleAddPlayer}) {
    
    const [player, setPlayer] = useState({
        name: "",
        age: [],
        years_of_experience: [],
        country: "",
        photo_url: "" 
    })
    function handleChange(e){
        const updatedValue = {...player}
        updatedValue[e.target.name] = e.target.value;
        setPlayer(updatedValue);
    }

    function handleSubmit(e){
        e.preventDefault();
        const newplayer = {
            name: player.name,
            age: player.age,
            country:player.country,
            years_of_experience:player.years_of_experience,
            photo_url:player.photo_url
            }
        fetch(BASE_URL + "players", {
            method: "POST",
            body: JSON.stringify(newplayer),
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then(handleAddPlayer);
    }

    return (
        <div className="player-form">
            <h2>Create A New Player</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input name="name" placeholder="Mrbeast" value={player.name} onChange={handleChange} ></input> <br/>
                <label>Age: </label>
                <input name="age" placeholder="1...120" value={player.age} onChange={handleChange} ></input><br/>
                <label>Country: </label>
                <input name="country" placeholder="Spain" value={player.country} onChange={handleChange} ></input><br/>
                <label>Years of Experience: </label>
                <input name="years_of_experience" placeholder="1..10" value={player.years_of_experience} onChange={handleChange} ></input><br/>
                <label>Photo_URL: </label>
                <input name="photo_url" placeholder="photo_url.jpg" value={player.photo_url} onChange={handleChange}></input><br/>
                <button type="submit">Create Player</button>
            </form>
        </div>
    );


}

export default PlayerForm