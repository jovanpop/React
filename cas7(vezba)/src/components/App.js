import React,{useState} from "react";
import { Training } from "./Training";

export function App (){
const [listofThings,setListofThings]=useState([{id:1,name:"Pero",lastName:"Perovski",year:1996},
{id:2,name:"Ivan",lastName:"Ivanovski",year:1997},
{id:3,name:"Stefan",lastName:"Stefanovski",year:1998}]);
const[newName,setNewname]=useState("");
const[newLname,setNewLname]=useState("");
const[newYear,setNewYear]=useState("");
function addNewThing(){
  let newThing={
    id:listofThings.length+1,
    name: newName,
    lastName: newLname,
    year: newYear
  };
  setListofThings([...listofThings,newThing]);
  setNewname("");
  setNewLname("");
  setNewYear("");
}
function submit (event){
  event.preventDefault();
  addNewThing();
}
function deleteThing(id){
  setListofThings([...listofThings.filter((item)=>item.id !==id)]);
}
  return(
    <div>
      <form onSubmit={submit}>
      <input type="text" placeholder="Enter Name" value={newName} onChange={(e)=>setNewname(e.target.value)}></input><br></br>
      <input type="text" placeholder="Enter Last Name" value={newLname} onChange={(e)=>setNewLname(e.target.value)}></input><br></br>
      <input type="number" placeholder="Enter year (****)" value={newYear} onChange={(e)=>setNewYear(e.target.value)}></input><br></br>
      <input type="submit" value="Add"></input><br></br><br></br>
      </form>
      <Training listofThings={listofThings} deleteThing={deleteThing}/>
    </div>
  )
}
