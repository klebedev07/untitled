import {dialogReducer} from "./dialog-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id:1, message: "Hi bro", likeCount: 12},
                {id:2, message: "Hjw are youu?", likeCount: 1},
                {id:3, message: "What are you doing?", likeCount: 10},
                {id:4, message: "Cool page!", likeCount: 4},
            ]
        },
        dialogsPage: {
            dialogs: [
                {id:1, name: "Viktor"},
                {id:2, name: "Sasha"}
            ],
            messages: [
                {id:1, message: "Hi"},
                {id:2, message: "How is your day?"}
            ],

            newMessageBody: ''
        }
    },

    _callSubscriber() {
        console.log('State changed!')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch(action) {
        dialogReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

export let state = {
    profilePage: {
        posts: [
            {id:1, message: "Hi bro", likeCount: 12},
            {id:2, message: "Hjw are youu?", likeCount: 1},
            {id:3, message: "What are you doing?", likeCount: 10},
            {id:4, message: "Cool page!", likeCount: 4},
        ]
    }
}

export let addPost = (postMessage) => {

    let newPost = {id:5, message: postMessage, likeCount: 0}
    state.profilePage.posts.push(newPost)
}


export default store