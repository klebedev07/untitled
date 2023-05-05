import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, setUsers, unFollow} from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        setUsers: (users) => {
            dispatch(setUsers(users))
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer