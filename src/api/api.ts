import axios from "axios";

const instance = axios.create({
    baseURL: 'https://zentesting.herokuapp.com',
    withCredentials: true,
})

export const fastAPI = {
    showUsers() {
        return instance.get(`show_users/`)
    },
    getUser(user_id: number) {
        return instance.get(`${user_id}/`)
    },
    createUser(payload: createUserType) {
        return instance.post(`create_user/`, payload)
    },
    updateUser(userId: number, payload: createUserType) {
        return instance.put(`update_user/${userId}/`, payload)
    },
    deleteUser(userId: number) {
        return instance.delete(`delete_user/${userId}/`)
    },
}


export type createUserType = {
    user_name: string,
    email: string,
    password: string,
}

export type usersType = {
    id: number,
    user_name: string,
    email: string,
    password: string,
    status: string,
    created_at: string,
    updated_at: null | string,
}