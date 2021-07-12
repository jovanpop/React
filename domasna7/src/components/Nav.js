import React from "react";
import {Link} from "react-router-dom"
export function Nav (){
    return(<div>
        <ul>
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
        </ul>
    </div>)
}