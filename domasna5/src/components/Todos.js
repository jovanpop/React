import React from 'react';
import PropTypes from 'prop-types';

export function Todos(props){

    console.log(props)
    return(
        <ol>
            {props.todos.map((todo,i)=>{
                    return(
                        <li className={todo.done ? "marked-done" : ""} key={todo.id} id={todo.id}>
                            <span>{todo.todoText}</span>
                            <input 
                                type="checkbox"
                                value={todo.done}
                                checked={todo.done}
                                onChange={()=>{props.markTodoAsDone(todo)}}
                            />
                            
                            <button onClick={function DeleteItem(){
                                let DeleteEl=document.getElementById(todo.id);
                                DeleteEl.remove(todo.id);}}>Delete</button>
                        </li>
                    )
            })
            }
        </ol>
    )
}


Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markTodoAsDone:PropTypes.func,
    DeleteItem: PropTypes.func
}