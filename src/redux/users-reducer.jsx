const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const AVA_URL = 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/213245707/original/66a67e36fe8227d15c8c310cc112b60e74af5d6f/design-avatar-cartoon-for-business-gaming-social-media.jpg'


let initialState = {
    users: []
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
        let newState = {...state, users: [...state.users, ...action.users]}
        return newState
    }
    return state
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UNFOLLOW,  userId})
export const setUsers = (users) => ({type: SET_USERS, users})