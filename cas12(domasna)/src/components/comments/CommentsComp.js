import React from "react";
import PropTypes from "prop-types";
export function CommentsComp(props){
    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <td>Name:</td>
                        <td>Email:</td>
                        <td>Comment:</td>
                    </tr>
                </thead>
                <tbody>
                    {props.comments.map(comment=>{
                        return(
                            <tr key={comment.id}>
                                <th>{comment.name}</th>
                                <th>{comment.email}</th>
                                <th>{comment.body}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
CommentsComp.propTypes={
    comments: PropTypes.array.isRequired
}