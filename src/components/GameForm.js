import React, { useState} from 'react';

function GameForm({createGame}) {

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        cost: [],
        rate: [],
        average_length: [],
        img_url: "",
        storage_space: []
    })

    function handleChange(e) {
        formData[e.target.name] = e.target.value
        setFormData({...formData})
    }

    function handleSubmit(e){
        e.preventDefault()
        createGame(formData)
        setFormData({
            name: "",
            category: "",
            cost: [],
            rate: [],
            average_length: [],
            img_url: "",
            storage_space: []
        })
    }

    return (
        <form className="game-form">
            <label>Name: </label>
            <input onChange={handleChange} name="name" value={formData.name} /> <br/>
            <label>Category: </label>
            <input onChange={handleChange} name="category" value={formData.category} /> <br/>
            <label>Cost: </label>
            <input onChange={handleChange} name="cost" value={formData.cost} /> <br/>
            <label>Rate: </label>
            <input onChange={handleChange} name="rate" value={formData.rate} /> <br/>
            <label>Average length: </label>
            <input onChange={handleChange} name="average_length" value={formData.average_length} /> <br/>
            <label>Storage Space: </label>
            <input onChange={handleChange} name="storage_space" value={formData.storage_space} /> <br/>
            <label>Image Url: </label>
            <input onChange={handleChange} name="img_url" value={formData.img_url} /> <br/>
            <button onClick={handleSubmit}>Add a New Game to This Console</button>
        </form>
    );
}

export default GameForm