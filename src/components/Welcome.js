import React from "react";
import '../App.css'

// create function component that uses a prop
function Welcome(props) {
    return (
        <div className="Welcome">
            <h3 className="message">Welcome {props.name}</h3>
        </div>
    )
}

export default Welcome