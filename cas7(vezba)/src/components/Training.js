import React from "react";
import PropTypes from "prop-types";

export function Training (props){
    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Ime</th>
                        <th>Prezime</th>
                        <th>Godina</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listofThings.map((things,i)=>{
                        return(
                            <tr key={things.id}>
                                <th>{things.name}</th>
                                <th>{things.lastName}</th>
                                <th>{things.year}</th>
                                <th><button onClick={()=>props.deleteThing(things.id)}>Delete</button></th>
                            </tr>

                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

Training.propTypes={
    listofThings: PropTypes.array.isRequired,
    deleteThing: PropTypes.func
}
