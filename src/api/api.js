import axios from "axios";


const axiosInstance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
        withCredentials: true,
        headers: {
            "API-KEY": "0f19c6ca-9da0-4fa3-a232-c4ec378446e2"
        }
    }
);


export const authApi = {
    me() {
        return axiosInstance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    }
}


export const userApi = {
    getUsers(pageNumber = 1, pageSize = 5) {
        return axiosInstance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,)
            .then(resp => {
                return resp.data
            })
    },

    getUserInfo(userId) {
        return axiosInstance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)},

    follow(userId) {
        return axiosInstance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,)
    },

    unfollow(userId) {
        return axiosInstance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,)
    }


}