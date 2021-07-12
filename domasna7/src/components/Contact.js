import React, { useState } from "react";
export function Contact (){
    const [Fname,setFname]=useState("");
    const [Lname,setLname]=useState("");
    const [adress,setAdress]=useState("");
    const [Form,setForm]=useState("");
    function submit (event){
        event.preventDefault();
        setForm(!Form);
    }
    return(<div>
        {Form && <form>
        <input type="text" placeholder="First name" value={Fname} onChange={e=>setFname(e.target.value)}></input><br/>
        <input type="text" placeholder="Last name" value={Lname} onChange={e=>setLname(e.target.value)}></input><br/>
        <input type="text" placeholder="Adress" value={adress} onChange={e=>setAdress(e.target.value)}></input><br/><br/>
        </form>}
        <button onClick={submit}>{Form ? "Disable" : "Enable"}</button>
    </div>)
}