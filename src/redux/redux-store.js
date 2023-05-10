import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";
import {profileReducer} from "./profile-reducer";


let reducerBatch = combineReducers(
    {
        dialogsPage: dialogReducer,
        usersPage: usersReducer,
        profilePage: profileReducer
    }
);

let store = createStore(reducerBatch)

export default store