import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


const OldDialogsContainer = (props) => {


    return (
        // <StoreContext.Consumer>
        //     {
                (store) => {
                    let dialogsPage = store.getState().dialogsPage;

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }

                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }

                    return <Dialogs updateNewMessageBody={onNewMessageChange}
                                    sendMessage={onSendMessageClick}
                                    dialogsPage={dialogsPage}
                    />
                }
            // }

        // </StoreContext.Consumer>
    )
}


export default DialogsContainer