import React from "react";
import "./Profile.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
    return <div>
        <ProfileInfo userInfo={props.userInfo}/>
        {/*<MyPosts state={props.state} addPost={props.addPost}/>*/}
    </div>



}


export default Profile;