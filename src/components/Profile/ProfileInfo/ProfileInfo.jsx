import React from "react";
import classes from "./ProfileInfo.module.css"


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://img.freepik.com/premium-photo/abstract-seascape-with-palm-tree-tropical-beach-background_1484-1999.jpg?w=1380"/>
            </div>
            <div className={classes.descriptionBLock}>ava + desc</div>
        </div>
    )
}

export default ProfileInfo