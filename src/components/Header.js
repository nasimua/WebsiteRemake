import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
//import welcome function
import Welcome from "./Welcome";

// create function component for header

function Header() {
    return (
        <div className="Header">
            <a href="/"><img src="https://www.wwe.com/a/i/wwe_logo.svg" alt="logo" className="logo"/></a> 
            <nav className="nav-bar">
                <Link to='/' className="link">Home</Link>
                <Link to='/shows' className="link">Shows</Link>
                <Link to='/superstars' className="link">Superstars</Link>
            </nav>
            <Welcome name="Nasim" />
        </div>
    )
}

// export each function component that will be used
export default Header;