import React, { useState } from "react";
import { BASE_URL, CGL } from "../constrains/index"
import '../styles/GameplayForm.css'


function GameplayForm({handleAddGameplay}) {
    const [gameplay, setGameplay] = useState({
        title: "",
        likes: 0,
        video_url: "",
        game_time: [],
        game: {
            name: "",
            category: "",
            cost: [],
            rate: [],
            average_length: [],
            img_url: "",
            storage_space: []
        },
        player: {
            name: "",
            age: [],
            country: [],
            years_of_experience: [],
            photo_url: ""
        }
    })
    function handleChange(e){
        const updatedValue = {...gameplay}
        updatedValue[e.target.name] = e.target.value;
        setGameplay(updatedValue);
    }

    function handleSubmit(e){
        e.preventDefault();
        const newGameplay = {
            title: gameplay.title,
            likes: gameplay.likes,
            video_url: gameplay.video_url,
            game_time: gameplay.game_time,
            game: {
                name: gameplay.game.name,
                category: gameplay.game.category,
                cost: gameplay.game.cost,
                rate: gameplay.game.rate,
                average_length: gameplay.game.average_length,
                img_url: gameplay.game.img_url,
                storage_space: gameplay.game.storage_space
                },
            player: {
                name: gameplay.player.name,
                age: gameplay.player.age,
                country: gameplay.player.country,
                years_of_experience: gameplay.player.years_of_experience,
                photo_url: gameplay.player.photo_url
                }
            }
            CGL.log(newGameplay)
        fetch(BASE_URL + "gameplays", {
            method: "POST",
            body: JSON.stringify(newGameplay),
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then(handleAddGameplay);
    }

    return (
        <div className="gameplay-form">
            <h2>Create A New Gameplay</h2>
            <form onSubmit={handleSubmit}>
                <div className="gameplay-info">
                    <label>Title:</label>
                    <input name="title" placeholder="player-name playing game-name in name-console" value={gameplay.title} onChange={handleChange} ></input> <br/>
                    <label>Gaming Time: </label>
                    <input name="game_time" placeholder="1... 60" value={gameplay.game_time} onChange={handleChange} ></input><br/>
                    <label>Video URL: </label>
                    <input name="video_url" placeholder="https://www.youtube.com/embed/reroqwd" value={gameplay.video_url} onChange={handleChange} ></input><br/>  
                </div>
                <div className="game-info">
                    <label>Game Name: </label>
                    <input name="game" placeholder="Zelda" value={gameplay.game.name} onChange={handleChange} ></input><br/>
                    <label>Game Category: </label>
                    <input name="category" placeholder="MMORPG" value={gameplay.game.category} onChange={handleChange} ></input><br/>
                    <label>Game Cost: </label>
                    <input name="game" placeholder="10..100" value={gameplay.game.cost} onChange={handleChange} ></input><br/>
                    <label>Game Rate: </label>
                    <input  placeholder="1..10" name="game" value={gameplay.game.rate} onChange={handleChange}/> <br/>
                    <label>Game Average length: </label>
                    <input  placeholder="10..100" name="game" value={gameplay.game.average_length} onChange={handleChange}/> <br/>
                    <label>Game Storage Space: </label>
                    <input  placeholder="0..250" name="game" value={gameplay.game.storage_space} onChange={handleChange}/> <br/>
                    <label>Game Image Url: </label>
                    <input  placeholder="https://gamename.jpg" name="game" value={gameplay.game.img_url} onChange={handleChange}/> <br/>
                </div>
                <div className="player-info">
                    <label>Player Name: </label>
                    <input name="player" placeholder="Crimsix" value={gameplay.player.name} onChange={handleChange} ></input> <br/>
                    <label>Player Age: </label>
                    <input name="player" placeholder="1...120" value={gameplay.player.age} onChange={handleChange} ></input><br/>
                    <label>Player Country: </label>
                    <input name="player" placeholder="USA" value={gameplay.player.country} onChange={handleChange} ></input><br/>
                    <label>Player Years of Experience: </label>
                    <input name="player" placeholder="1..10" value={gameplay.player.years_of_experience} onChange={handleChange} ></input><br/>
                    <label>Photo_URL: </label>
                    <input name="player" placeholder="photo_url.jpg" value={gameplay.player.photo_url} onChange={handleChange}></input><br/>
                </div>
                <button type="submit">Create gameplay</button>
            </form>
        </div>
    );

}

export default GameplayForm;