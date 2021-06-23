import React from 'react';
import PropTypes from 'prop-types';

export function Input(props){
    return(
        
        <p>
            {props.showComment && props.showComment=== true ? <textarea rows="8" cols="20" placeholder="Comment"></textarea> : <input 
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />}

            {props.name === "password" ? <button type="button" className="eye-button" onClick={props.togglePassword} >
                <i className={props.type === "password" ? "fa fa-eye-slash" : "fa fa-eye"} ></i>  
            </button> : null }
            {props.name === "comment" ? <button type="button" className="eye-button" onClick={props.toggleComment} >
                <i className={props.showComment === true ? "fa fa-comment" : "fa fa-comment-o"} ></i>  
            </button> : null }
        </p>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    togglePassword:PropTypes.func,
    showComment: PropTypes.bool,
    toggleComment: PropTypes.func
}