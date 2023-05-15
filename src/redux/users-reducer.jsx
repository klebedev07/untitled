import {userApi} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_FETCHING = 'SET_FETCHING'
const SET_FOLLOWING = 'SET_FOLLOWING'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
export const usersReducer = (state = initialState, action) => {

    if (action.type === FOLLOW) {
        return {
            ...state, users: state.users.map(u => {
                    if (action.userId === u.id) {
                        return {...u, followed: true}
                    }
                    return u;
                }
            )
        }
    } else if (action.type === UNFOLLOW) {
        return {
            ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }
            )
        }
    } else if (action.type === SET_USERS) {
        let newState = {...state, users: action.users}
        return newState
    } else if (action.type === SET_CURRENT_PAGE) {
        return {...state, currentPage: action.currentPage}
    } else if (action.type === SET_TOTAL_USER_COUNT) {
        return {...state, totalUsersCount: action.totalUsersCount}
    } else if (action.type === SET_FETCHING) {
        return {...state, isFetching: action.isFetching}
    } else if (action.type === SET_FOLLOWING) {
        return {...state, followingInProgress: action.isFollowing
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id=> id != action.userId)
                }
    }
    return state
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USER_COUNT, totalUsersCount: totalUsersCount})
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching: isFetching})
export const setIsFollowing = (isFollowing, userId) => ({type: SET_FOLLOWING, isFollowing: isFollowing, userId: userId})

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setFetching(true))
        dispatch(setCurrentPage(currentPage))
        userApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(setFetching(false))
        })
    }
}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setIsFollowing(true, userId))
        userApi.follow(userId).then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(setIsFollowing(false, userId))
        })
    }
}

export const unFollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setIsFollowing(true, userId))
        userApi.unfollow(userId).then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(unFollow(userId))
            }
            dispatch(setIsFollowing(false, userId))
        })
    }
}