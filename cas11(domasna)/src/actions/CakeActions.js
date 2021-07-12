import {BUY_CAKE, RESTOCK_CAKES} from "../constants/CakeConstants";
export const buyCake=(numofCakes)=>{

    return{
        type:BUY_CAKE,
        payload:numofCakes
    }
}
export const restockCakes=(restock)=>{
    return{
        type:RESTOCK_CAKES,
        payload:restock
    }
}