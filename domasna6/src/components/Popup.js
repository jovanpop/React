import React from "react";
import PropTypes from "prop-types";
export function Popup(props){
    return(
        <div id="popup">
            <button onClick={props.closePhoto} className="close-popup">&times;</button>
            <div className="popup-container">{<img src={props.selektiranaslika}alt={""}></img>}</div>
        </div>
    )
}
Popup.propTypes ={
    closePhoto: PropTypes.func,
    selektiranaslika: PropTypes.string
}