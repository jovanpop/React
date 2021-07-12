import React from "react";
import {Link} from "react-router-dom";

export function Nav (){
    return(
    <div id="Nav">
        <h2>Navigation</h2>
        <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/albums">Albums</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        </ol>
    </div>
    )
}
