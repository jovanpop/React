import React,{useState} from 'react';
export function App (){
  const [Fname,setFname]=useState("");
  const [Lname,setLname]=useState("");
  const [Email,setEmail]=useState("");
  const [PW,setPW]=useState("");
  const [Phone,setPhone]=useState("");
  const [Birthday,setBirthday]=useState("");
  const [Gender,setGender]=useState("");
  const [Table,setTable]=useState("");

  function submit (event){
    event.preventDefault();
    setTable(!Table);
  }
  return(
    <div align="center">
      <form onSubmit={submit}>
      <h2>Sign-up</h2>
      <input type="text" placeholder="First Name" value={Fname} onChange={(e)=>{setFname(e.target.value)}}></input>
      <input type="text" placeholder="Last Name" value={Lname} onChange={(e)=>{setLname(e.target.value)}}></input><br></br>
      <input type="email" placeholder="E-mail" value={Email} onChange={(e)=>{setEmail(e.target.value)}}></input>
      <input type="password" placeholder="Password" value={PW} onChange={(e)=>{setPW(e.target.value)}}></input><br></br>
      <input type="tel" placeholder="Phone number (07*******)" pattern={"[0]{1}[7]{1}[0-9]{7}"}value={Phone} onChange={(e)=>{setPhone(e.target.value)}}></input>
      <input type="date" value={Birthday} onChange={(e)=>{setBirthday(e.target.value)}}></input><br></br>
      <input type="text" placeholder="Gender" value={Gender} onChange={(e)=>{setGender(e.target.value)}}></input><br></br><br></br>
      <button type="submit">{Table ? "Hide Values": "Show Values"}</button>
      </form>
      <div><br></br>
    {Table && <table border="2">
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
    </table>}
    </div>
    </div>
  )
}

