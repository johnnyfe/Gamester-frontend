import react from "react";


function GameDetails({game}) {
    return (
        <div>
            <p>Name: {game.name}</p>
            <p>Category: {game.category}</p>
            <p>Cost: {game.cost} dollars</p>
            <p>Rate: {game.rate}</p>
            <p>Average Length: {game.average_length} hours</p>
            <p>Storage Space: {game.storage_space} Gbs</p>
            <img src={game.img_url} alt ={game.name}></img>
        </div>
    )
}

export default GameDetails