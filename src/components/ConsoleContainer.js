import React, {useEffect, useState} from 'react';
import { BASE_URL } from "../constrains/index";
import Console from "./Console";

function ConsoleContainer(){

    const [consoles, setConsoles] = useState([])
    const [currentSearch, setCurrentSearch] = useState("")
    //READ

    useEffect(() => {
        fetch(BASE_URL + 'consoles')
        .then(res => res.json())
        .then(setConsoles)
    }, [])

    const consoleDisplayed = consoles
    .filter((console)=> {
        return (
        console.name.toLowerCase().includes(currentSearch.toLowerCase()) 
        )
    })

    function populateConsoles() {
        return consoleDisplayed.map((console) => (
        <Console console={console} key={console.id} updateConsole={updateConsole} deleteConsole={deleteConsole}/>));
    }

    function handleChange(e){
        setCurrentSearch(e.target.value)
    }
    
    //UPDATE

    function updateConsole(console){
        fetch(BASE_URL + 'consoles/' + console.id, {
            method: "PATCH",
            body: JSON.stringify(console),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
        });
        const newConsole = consoles.map((c) =>{
            if (c.id === console.id) {
                c = console;
            }
            return c
        })
        setConsoles(newConsole)
    }

    //DELETE

    function deleteConsole(console){
        fetch(BASE_URL + 'consoles' + console.id, {
            method: "DELETE"
        })
        const newConsole = consoles.filter(c => c.id!== console.id)
        setConsoles(newConsole)
    }

    return(
        <div>
            <label>Find by Name: </label>
            <input onChange={handleChange} value={currentSearch}></input>
            <div className="console-container">{consoles && populateConsoles()}</div>
        </div>
    )
}

export default ConsoleContainer