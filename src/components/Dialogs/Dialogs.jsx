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

    let dialogElements = props.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id} /> )
    let messageElements = props.dialogsPage.messages.map(d => <Message message={d.message} id={d.id} /> )
    let newMessageBody = props.dialogsPage.newMessageBody


    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter you message'></textarea> </div>
                    <div><button onClick={onSendMessageClick}>Send</button> </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs