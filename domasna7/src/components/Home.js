import React, { useState } from "react";
export function Home (){
    const [dates,setDates]=useState([]);
    const [day,setDay]=useState("");
    const [month,setMonth]=useState("");
    const [year,setYear]=useState("");
    function addDate(){
        let newDate={
            id: dates.length +1,
            day: day,
            month: month,
            year: year
        }
        setDates([...dates,newDate]);
        setDay("");
        setMonth("");
        setYear("");
    }

    function submit(event){
        event.preventDefault();
        addDate();
    }
    function deleteItem(id){
        setDates([...dates.filter((item)=>item.id !==id)])
    }

    return(<div>
        <form onSubmit={submit}>
            <input type="number" placeholder="Day" min="1" max="31" value={day} onChange={e=>setDay(e.target.value)}></input><br></br>
            <input type="number" placeholder="Month" min="1" max="12" value={month} onChange={e=>setMonth(e.target.value)}></input><br></br>
            <input type="number" placeholder="Year" min="1" max="2021" value={year} onChange={e=>setYear(e.target.value)}></input><br></br>
            <input type="submit" value="Add date"></input>
        </form>
        {dates.length===0 ? null : <table border="2">
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Month</th>
                    <th>Year</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {dates.map(date=>{
                    return(
                    <tr key={date.id}>
                        <th>{date.day}</th>
                        <th>{date.month}</th>
                        <th>{date.year}</th>
                        <th><button onClick={()=>deleteItem(date.id)}>Delete</button></th>
                    </tr>
                    
                    )
                })}      
            </tbody>
        </table>
        }
    </div>)
}