const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_FETCHING = 'SET_FETCHING'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
    } else if(action.type === SET_USERS) {
        let newState = {...state, users: action.users}
        return newState
    } else if(action.type === SET_CURRENT_PAGE) {
        return {...state, currentPage: action.currentPage}
    } else if(action.type === SET_TOTAL_USER_COUNT){
        return {...state, totalUsersCount: action.totalUsersCount}
    } else if(action.type === SET_FETCHING){
        return {...state, isFetching: action.isFetching}
    }
    return state
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UNFOLLOW,  userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USER_COUNT, totalUsersCount: totalUsersCount})
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching: isFetching})