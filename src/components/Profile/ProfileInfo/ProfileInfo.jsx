import React from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader";


const ProfileInfo = (props) => {
    if( !props.userInfo) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://img.freepik.com/premium-photo/abstract-seascape-with-palm-tree-tropical-beach-background_1484-1999.jpg?w=1380"/>
            </div>
            <div className={classes.descriptionBLock}>
                <img src={props.userInfo.photos.large}/>

                <div>
                    {props.userInfo.fullName}
                </div>

                <div>
                    {props.userInfo.aboutMe}
                </div>


            </div>
        </div>
    )
}

export default ProfileInfo