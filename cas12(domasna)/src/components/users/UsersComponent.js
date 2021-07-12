import React from "react";
import PropTypes from "prop-types";
export function UsersComponent (props){
    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Username:</th>
                        <th>Email:</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user=>{
                        return(
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
UsersComponent.propTypes={
    users: PropTypes.array.isRequired
}