import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, setCurrentPage, setUsers, unFollow, setTotalUsersCount, setFetching} from "../../redux/users-reducer";
import axios from "axios";
import Preloader from "../common/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(resp => {
            this.props.setUsers(resp.data.items)
            this.props.setTotalUsersCount(resp.data.totalCount)
            this.props.setFetching(false)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(resp => {
            this.props.setUsers(resp.data.items)
            this.props.setFetching(false)
        })


    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unFollow={this.props.unFollow}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(
    mapStateToProps,
    {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setFetching}
)(UsersContainer)
