
import React, { useState, useEffect } from 'react';
import {Todos} from './Todos';

export function App() {

    const [person, setPerson] = useState({ firstName: "", lastName: "" });
    const [car, setCar] = useState({ model: "Yugo", year: 1986 });
    const [days, setDays] = useState(["Monday", "Tuesday", "Wednesday"]);
    const [todos, setTodos] = useState(
        [
            { id: 0, todoText: "Listen React Course", done: false },
            { id: 1, todoText: "Eat Dinner", done: false },
            { id: 2, todoText: "Go to Sleep", done: false }
        ]
    );
    const [newTodo,setNewTodo] = useState('');

    useEffect(() => {
        console.log(person);
    }, [person])

    function updateCar() {
        setCar({
            ...car,
            year: 2001
        })
    }

    function addDay() {
        setDays(["Sunday", ...days, "Thursday"]);
    }
    function addTodo(){
        let novObjekt = {
            id: todos.length + 1,
            todoText: newTodo,
            done: false
        }
        
        setTodos([
            ...todos,novObjekt
        ]);
        setNewTodo('');
    }
    function markTodoAsDone(todo){
        setTodos(
            [
                ...todos.map(item => (item.id === todo.id) ? //go barame kliknatiot element po negovoto ID
                {id: item.id, todoText:item.todoText,done:!item.done} //ako go najde elementot pravime toggle na done property-to
                : item) //za ostanatite elementi vrati go istiot t.e. nema promeni
            ]
        )
    }
    function DeleteTodo(id){
        setTodos (todos.filter((item)=>item.id !==id));
    }

    return (
        <div id="app">

            <input
                type="text"
                placeholder="Enter First Name"
                value={person.firstName}
                onChange={(e) => { setPerson({ ...person, firstName: e.target.value }) }}
            />
            <input
                type="text"
                placeholder="Enter Last Name"
                value={person.lastName}
                onChange={(e) => { setPerson({ ...person, lastName: e.target.value }) }}
            />

            <h2>Car:</h2>
            <p>Model: {car.model} </p>
            <p>Year: {car.year} </p>
            <button onClick={updateCar}>
                Buy New Car
            </button>

            <ul>
                {days.map((day, i) => {
                    return (
                        <li key={i}>
                            {day}
                        </li>
                    )
                })

                }
            </ul>
            <button onClick={addDay}>
                Add Day
            </button>
                <br/>
             <input 
                type="text"
                placeholder="Add ToDo"
                value={newTodo}
                onChange={e=>{setNewTodo(e.target.value)}}
             />   
             <button onClick={addTodo}>
                 Add Todo
             </button>
            <Todos todos={todos} markTodoAsDone={markTodoAsDone} DeleteTodo={DeleteTodo} />
        </div>
    )
}