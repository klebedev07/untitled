import React from "react";
import "./Profile.css"
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return <div>
        <div>
            {/*<img src="https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg"/>*/}
        </div>
        <div>
            <img src="https://img.freepik.com/premium-photo/abstract-seascape-with-palm-tree-tropical-beach-background_1484-1999.jpg?w=1380"/>
        </div>
        <MyPosts/>
    </div>


}


export default Profile;