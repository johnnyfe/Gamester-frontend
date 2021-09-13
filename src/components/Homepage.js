import React from 'react';
import "../styles/HomePage.css"

function HomePage() {
    return (
        <div className="home-page-container">
            <h1>Gamester</h1><br/>
            <div className="home-page-content">
            <img src="https://images2.alphacoders.com/141/141972.jpg" alt="homepage-videogame-characters"></img>
            <p>Are you interesting in becoming a famous videogame player and show others what you can do?</p>
            <p>Do you want to see your favorite players, playing the games you like?</p>
            <p>You came to the right place to do it!!</p>
            <p>Welcome to Gamester app the videogame platform to watch videogame players with their games</p><br/>
            <p>Copyright:</p>
            <p>© 2021 Gamester, Inc</p>
            </div>
        </div>
    );
}

export default HomePage;