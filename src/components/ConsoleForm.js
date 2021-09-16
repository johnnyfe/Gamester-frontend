import React, { useState } from "react";
import { BASE_URL } from "../constrains/index"

function ConsoleForm({handleAddConsole}) {

    const [console, setConsole] = useState({
        name: "",
        cost: [],
        storage_capacity: [],
        img_url: "",
        game: []
    })
    function handleChange(e){
        const updatedValue = {...console}
        updatedValue[e.target.name] = e.target.value;
        setConsole(updatedValue);
    }

    function handleSubmit(e){
        e.preventDefault();
        const newConsole = {
            name: console.name,
            cost: console.cost,
            storage_capacity: console.storage_capacity,
            img_url: console.img_url,
            game: console.game,
        }
        fetch(BASE_URL + "consoles", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newConsole),
            
          })
            .then((res) => res.json())
            .then(handleAddConsole);
    }

    return (
        <div className="console-form">
            <h2>Create A New Console</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input name="name" placeholder="PS5" value={console.name} onChange={handleChange} ></input> <br/>
                <label>Cost: </label>
                <input name="cost" placeholder="150...1000" value={console.cost} onChange={handleChange} ></input><br/>
                <label>Storage Capacity: </label>
                <input name="storage_capacity" placeholder="1...5000" value={console.storage_capacity} onChange={handleChange} ></input><br/>
                <label>Image Url: </label>
                <input name="img_url" placeholder="https://image.jpg" value={console.img_url} onChange={handleChange} ></input><br/>
                <button type="submit">Create Console</button>
            </form>
        </div>
    );

}

export default ConsoleForm;