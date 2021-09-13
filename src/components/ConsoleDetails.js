import { useState } from "react"
import { useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";
import { BASE_URL } from "../constrains";
import Game from "./Game";
import { useHistory } from "react-router";


function ConsoleDetails(){

    const [console, setConsole] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("ALL")

    const { id } =  useParams();
    const history = useHistory();

    useEffect(()=> {
        fetch(BASE_URL + 'consoles/'+ id)
        .then((res) => { 
            if(!res.ok){
                throw Error(res.statusText)
            }
            return res.json()
        })
        .then((json) => {setConsole(json) })
        .catch(error => {
            console.log(error)
            history.push('/')
        })
    }, [id, history]);

    function uniqueCategories(){
        if(console !== null){
            const category = console.games.map((game) => game.category);
        const uniqueCategory = [...new Set(category)]
        return uniqueCategory
        }
    }

    function populateCategoriesOptions(){
        return uniqueCategories().map((category) => (
            <option key={category.toString()} value={category}>{category}</option>
        ))
    }
    
    function handleSelectCategory(e){
        setSelectedCategory(e.target.value)
    }

    function filteredGames(){
        if(selectedCategory == "ALL"){
            return console.games;
        }
        return console.games.filter(
            (game) => game.category === selectedCategory
        );
    }

    return (
        <div>
            {console && (
                <>
                <div className="console-selected">
                    <h2>VideoGame Console</h2>
                    <p>Console: {console.name}</p>
                    <p>Cost: {console.cost} dollars</p>
                    <p>Storage Capacity: {console.storage_capacity} GBs</p>
                    <img src={console.img_url} alt={console.name}></img>
                </div>
                <h2>List of VideoGames</h2>
                <div className="game-selected">
                    <select value={selectedCategory} onChange={handleSelectCategory}>
                        <option value="ALL">All positions</option>
                        {populateCategoriesOptions()}
                    </select>
                    <div className = "game-card-container">
                        {filteredGames().map((game)=>(
                            <Game key={game.id} game={game} />
                        ))}
                    </div>
                </div>
                </>
            )}
        </div>
    )

}

export default ConsoleDetails