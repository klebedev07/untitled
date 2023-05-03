import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";


let reducerBatch = combineReducers(
    {
        dialogsPage: dialogReducer,
        usersPage: usersReducer
    }
);

let store = createStore(reducerBatch)

export default store