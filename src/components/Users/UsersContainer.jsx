import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, setUsers, unFollow} from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(follow(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollow(userId))
        },
        setUSers: (users) => {
            dispatch(setUsers(users))
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer