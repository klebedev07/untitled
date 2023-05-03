const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


let initialState = {
    dialogs: [
        {id: 1, name: "Viktor"},
        {id: 2, name: "Sasha"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your day?"}
    ],

    newMessageBody: ''
}
export const dialogReducer = (state = initialState, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        let stateCopy = {...state}
        stateCopy.newMessageBody = action.body
        return stateCopy
    } else if (action.type === SEND_MESSAGE) {
        debugger
        let stateCopy = {...state}
        stateCopy.messages = [...state.messages]
        let body = stateCopy.newMessageBody
        stateCopy.messages.push({id: 3, message: body})
        stateCopy.newMessageBody = ''

        return stateCopy
    }
    return state
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})