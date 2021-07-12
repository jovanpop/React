import React from "react";
import PropTypes from "prop-types";
export class Posts extends React.Component{
    render(){
        console.log(this.props);
        return(<div>
            {this.props.postList.map(post=>{
                return(
                    <div key={post.id}>
                        <p>Title: {post.title}</p>
                        <p>Body: {post.body}</p>
                    </div>
                )
            })}
        </div>)
    }
}

Posts.propTypes={
    postList: PropTypes.array.isRequired
}