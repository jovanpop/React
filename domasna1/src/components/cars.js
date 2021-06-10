import React from 'react';
export function Cars(props) {
    return(
        <div>
            <h2>Car 1</h2>
            <p>Brand: {props.car1.brand}</p>
            <p>Model: {props.car1.model}</p>
            <p>Year: {props.car1.year}</p>
            <h2>Car 2</h2>
            <p>Brand: {props.car2.brand}</p>
            <p>Model: {props.car2.model}</p>
            <p>Year: {props.car2.year}</p>
        </div>
    )
};