import { useState, useEffect } from "react"
import { BASE_URL, CGL } from "../constrains";
import Gameplay from "./Gameplay";


function GameplayContainer(){
    
    const [gameplays, setGameplays] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + 'gameplays')
        .then(res => res.json())
        .then(setGameplays)
    }, []);

    //CREATE


    function populateGameplays(){
        return gameplays.map((gameplay) => (
            <Gameplay gameplay={gameplay} key={gameplay.id} deleteGameplay={deleteGameplay} updateGameplay={updateGameplay}/>
        ))
    }

    //CREATE

    function handleAddGameplay(newGameplay){
        const updateGameplay=([...gameplays, newGameplay])
        return setGameplays(updateGameplay)
    }

    //UPDATE

    function updateGameplay(gameplay){
        fetch(BASE_URL + 'gameplays/' + gameplay.id, {
            method: "PATCH",
            body: JSON.stringify(gameplay),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        });
        const newGameplay = gameplays.map((gp) => {
            if(gp.id === gameplay.id) {
                gp = gameplay
            }
            return gp
        })
        setGameplays(newGameplay)
    }

    //DELETE

    function deleteGameplay(gameplay){
        fetch(BASE_URL + 'gameplays/'+ gameplay.id, {
            method: "DELETE"
        })
        const newGameplay = gameplays.filter(gp => gp.id !== gameplay.id)
        setGameplays(newGameplay)
    }


    return (
        <div>
            {/* <div className="gameplay-form"><GameplayForm  handleAddGameplay={handleAddGameplay}/></div> */}
            <div className="gampley-container">{gameplays && populateGameplays()}</div>
        </div>
    )
}

export default GameplayContainer