import React from "react";
import { Link } from "react-router-dom";
import "./navigator.css";

function Sidebar(){
    return(
        <div className="navigator-bar">
            <Link to="/">Home</Link>
            <Link to="/smartphones">Smartphones</Link>
        </div>
    );
}

export default Sidebar;