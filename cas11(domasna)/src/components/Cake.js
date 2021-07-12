import React, { useState } from "react";
import { buyCake,restockCakes } from "../actions/CakeActions";
import {useDispatch,useSelector} from "react-redux";
export function Cake (){
    const dispatch=useDispatch();
    const cakes=useSelector(state=>state.CakeReducer.cakes);
    const errorMessage=useSelector(state=>state.CakeReducer.message);
    const [buyCakes,setBuyCakes]=useState("");
    const [restock,setRestock]=useState(0);

    
    function addCakes(){
            dispatch(buyCake(buyCakes));
            setBuyCakes("");
        }
    
    return(
        <div><h2>Cakes Available:{cakes}</h2>
        {errorMessage && <h2>{errorMessage}</h2>}
        <input disabled={cakes===0} min="1" max={cakes} type="number" placeholder={cakes===0 ? null : cakes===1 ? "1" : `1-${cakes}`} value={buyCakes} onChange={(e)=>setBuyCakes(e.target.value)}></input>
        <button disabled={cakes===0} value="Buy cake" onClick={addCakes}>Add Cakes</button>
        {/* <button disabled={cakes<1}onClick={()=>dispatch(buyCake(1))}>Buy 1 Cake</button>
        <button disabled={cakes<2} onClick={()=>dispatch(buyCake(2))}>Buy 2 Cakes</button>
        <button disabled={cakes<3} onClick={()=>dispatch(buyCake(3))}>Buy 3 Cakes</button> */}
        <input type="number" min="1" value={restock} onChange={(e)=>setRestock(e.target.value)}></input>
        <button disabled={restock<1} onClick={()=>dispatch(restockCakes(restock))}>Restock</button>
        </div>
    )
}