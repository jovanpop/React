import React,{useState} from "react";
export function About (){
    const [studentID,setStudentID]=useState("");
    const [city,setCity]=useState("");
    const [dob,setDOB]=useState("");
    const [gpa,setGPA]=useState("");
    function submit(event){
        event.preventDefault();
        alert(`StudentID: ${studentID} \n City: ${city} \n DOB: ${dob} \n GPA: ${gpa}`)
    }

    return(<div>
    <form onSubmit={submit}>
    <h3>StudentID:<input type="text" value={studentID} onChange={(e)=>setStudentID(e.target.value)}></input></h3>
    <h3>City:<input type="text" value={city} onChange={(e)=>setCity(e.target.value)}></input></h3>
    <h3>DOB:<input type="date" value={dob} onChange={(e)=>setDOB(e.target.value)}></input></h3>
    <h3>GPA:<input type="text" value={gpa} onChange={(e)=>setGPA(e.target.value)}></input></h3>
    <input type="submit" value="Alert!"></input>
    </form>
    </div>)
}