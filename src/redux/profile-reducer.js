import {userApi} from "../api/api";

const SET_USER_INFO = "SET_USER_INFO"

let initialState  = {
    posts: [
        {id: 1, message: "Hi bro", likeCount: 2},
        {id: 2, message: "How are you", likeCount: 4},
        {id: 3, message: "I'm samurai", likeCount: 20},
        {id: 4, message: "dsklfjsdlkfsdlkflkjsdf", likeCount: 0}
    ],
    newPostText: "it-kamasutra.com",
    userInfo: null
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO: {
            return {...state, userInfo: action.userInfo}
        }
        default:
            return state
    }

}

export const setUserInfo = (userInfo) => ({type: SET_USER_INFO, userInfo: userInfo})

export const getUserProfileThunk = (userId) => (dispatch) => {
    userApi.getUserInfo(userId).then(resp => {
        dispatch(setUserInfo(resp.data))
    })
}



