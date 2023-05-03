const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const AVA_URL = 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/213245707/original/66a67e36fe8227d15c8c310cc112b60e74af5d6f/design-avatar-cartoon-for-business-gaming-social-media.jpg'




let initialState = {
    users: [
        {id: 1, avatar: AVA_URL, fullName: "Viktor", status: "chill", followed: true, location: {city: "Moscow", country: "Russia"}},
        {
            id: 2,
            avatar: AVA_URL,
            fullName: "Sasha",
            status: "just chill",
            followed: false,
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 3,
            avatar: AVA_URL,
            fullName: "Anuar",
            status: "super chill",
            followed: false,
            location: {city: "Astana", country: "Kazakhstan"}
        },
        {id: 4,
            avatar: AVA_URL, fullName: "Dima", status: "on calling", followed: false, location: {city: "Moscow", country: "Russia"}},
    ]
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
                    let id = u.id;
                    let id2 = action.id;
                    let result = u.id === action.id;
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }
            )
        }
    } else if(action.type === SET_USERS) {
        return {...state, users: [...state.users, action.users]}
    }
    return state
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UNFOLLOW,  userId})
export const setUsers = (users) => ({type: SET_USERS, users})