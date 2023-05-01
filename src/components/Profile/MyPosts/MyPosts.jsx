import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.state.profilePage.posts
        .map(post => <Post message={post.message} likes={post.likeCount} />)

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    return <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div className={classes.postButtons}>
                <button onClick={addPost}>Add Post</button>
            </div>
        </div>
        <div className={classes.posts}>
            {postElements}
        </div>

    </div>


}


export default MyPosts;