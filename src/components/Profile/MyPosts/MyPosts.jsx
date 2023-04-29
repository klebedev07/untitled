import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
const MyPosts = () => {
    return <div >
        my posts
        <div>
            <textarea></textarea>
            <button>Add Post</button>
            <button>Remove</button>
        </div>
        <div>
            <Post message = "First post" likes = "5"/>
            <Post message = "Second post" likes= "10"/>
        </div>

    </div>


}


export default MyPosts;