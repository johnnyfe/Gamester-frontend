import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Player({player}) {
    return (
        <div>
            <Link to={`/players/${player.id}`}>
                <p>{player.name}</p>
           </Link>
           <p>Age: {player.age}</p>
           <p>Years of Experience: {player.year_of_experience}</p>
           <p>Country: {player.country}</p>
           <img src={player.photo_url} alt="photo_player"></img>
        </div>
    )
}

export default Player