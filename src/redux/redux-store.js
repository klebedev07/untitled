import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";
import {profileReducer} from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reduxForm} from "redux-form";


let reducerBatch = combineReducers(
    {
        dialogsPage: dialogReducer,
        usersPage: usersReducer,
        profilePage: profileReducer,
        auth: authReducer,
        form: reduxForm
    }
);

let store = createStore(reducerBatch, applyMiddleware(thunkMiddleware))

export default store