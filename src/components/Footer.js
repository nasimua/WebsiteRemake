import React from "react";
import "../App.css";

// create a footer function component to hold a link to the original website
function Footer() {
    return (
        <div className="Footer">
            <h3>Check out the real website here: <a href="https://www.wwe.com/" className="real" target="_blank" rel="noreferrer">WWE.com</a></h3>
        </div>
    )
}

export default Footer