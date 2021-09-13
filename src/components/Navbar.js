import React from 'react';
import {Link} from 'react-router-dom';
// import '../styles/NavBar.css';

function NavBar() {
    return (
        <div className="navbar">
            <Link to="/">HomePage</Link>
            <Link to="/players">All Players</Link>
            <Link to="/games">All Games</Link>
            <Link to="/gameplays">All Gameplays</Link>
            <Link to="/consoles">All Consoles</Link>
        </div>
    );
}

export default NavBar;