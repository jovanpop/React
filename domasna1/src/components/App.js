import React from 'react';
import {Cars} from './cars';
import {Year} from './year';

let car1={
    brand: "Audi",
    model: "A4",
    year: 1999
};
let car2={
    brand: "BMW",
    model: "M3",
    year: 2013
};

export function App(){
    return(
        <div>
            <Cars car1={car1} car2={car2}/>
            <Year car1over2k$={false} car2over2k$={true} car1={car1} car2={car2}/>              
        </div>
    )
}
