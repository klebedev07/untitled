import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";

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

    let dialogElements = props.state.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id} /> )
    let messageElements = props.state.dialogsPage.messages.map(d => <Message message={d.message} id={d.id} /> )
    let newMessageBody = props.state.dialogsPage.newMessageBody


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
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