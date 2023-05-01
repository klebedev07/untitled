import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <Dialog id="1" name="Viktor"/>
                <Dialog id="2" name="Masha"/>
                <Dialog id="3" name="Sasha"/>
                <Dialog id="4" name="Kolya"/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi bro"/>
                <Message message="How are you"/>
                <Message message="Whats up"/>
            </div>
        </div>
    )
}

export default Dialogs