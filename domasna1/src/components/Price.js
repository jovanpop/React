import React from 'react';
export function Year(props){
    return(
        <div>
             {props.car1over2k$===true && <div><br/><h2>Over 2k $</h2><h4>Car 1</h4><p>Brand: {props.car1.brand}</p><p>Model: {props.car1.model}</p><p>Year: {props.car1.year}</p>
        </div>}
            {props.car2over2k$===true && <div><br/><h2>Over 2k $</h2><h4>Car 2</h4><p>Brand: {props.car2.brand}</p><p>Model: {props.car2.model}</p><p>Year: {props.car2.year}</p>
        </div>}
        </div>
    )
};