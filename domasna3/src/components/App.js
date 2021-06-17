import React,{useState} from 'react';
export function App (){
  const [Fname,setFname]=useState("");
  const [Lname,setLname]=useState("");
  const [Email,setEmail]=useState("");
  const [PW,setPW]=useState("");
  const [Phone,setPhone]=useState("");
  const [Birthday,setBirthday]=useState("");
  const [Gender,setGender]=useState("");
/* function submit (){
    <div>
    <table border="2">
    <thead>
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>E-mail</th>
        <th>Password</th>
        <th>Phone</th>
        <th>Birthday</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{Fname}</th>
        <th>{Lname}</th>
        <th>{Email}</th>
        <th>{PW}</th>
        <th>{Phone}</th>
        <th>{Birthday}</th>
        <th>{Gender}</th>
      </tr>
    </tbody>
    </table>
    </div>
  } */
  return(
    <div align="center">
      <h2>Sign-up</h2>
      <input type="text" placeholder="First Name" value={Fname} onChange={(event)=>{setFname(event.target.value)}}></input>
      <input type="text" placeholder="Last Name" value={Lname} onChange={(event)=>{setLname(event.target.value)}}></input><br></br>
      <input type="email" placeholder="E-mail" value={Email} onChange={(event)=>{setEmail(event.target.value)}}></input>
      <input type="password" placeholder="Password" value={PW} onChange={(event)=>{setPW(event.target.value)}}></input><br></br>
      <input type="number" placeholder="Phone number" value={Phone} onChange={(event)=>{setPhone(event.target.value)}}></input>
      <input type="text" placeholder="Birthday" value={Birthday} onChange={(event)=>{setBirthday(event.target.value)}}></input><br></br>
      <input type="text" placeholder="Gender" value={Gender} onChange={(event)=>{setGender(event.target.value)}}></input><br></br><br></br>
      <input type="submit" /* onClick={submit} */></input>
      <div>
    <table border="2">
    <thead >
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>E-mail</th>
        <th>Password</th>
        <th>Phone</th>
        <th>Birthday</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{Fname}</th>
        <th>{Lname}</th>
        <th>{Email}</th>
        <th>{PW}</th>
        <th>{Phone}</th>
        <th>{Birthday}</th>
        <th>{Gender}</th>
      </tr>
    </tbody>
    </table>
    </div>
    </div>
  )
}

