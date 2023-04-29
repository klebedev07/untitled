import React from "react";
import classes from "./Post.module.css"

const Post = (props) => {
    return <div className={classes.item}>
        <img src="https://a0.anyrgb.com/pngimg/1498/1114/user-profile-login-recruiter-avatar-conversation-person-heroes-user-professional-gentleman.png"/>
        {props.message}
        <div>
            <span>Like {props.likes}</span>
        </div>
    </div>
}


export default Post;