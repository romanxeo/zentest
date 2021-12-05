import axios from "axios";

const instance = axios.create({
/*    baseURL: 'http://localhost:3000',*/
    withCredentials: true,
})

export const fastAPI = {
    showUsers() {
        debugger
        return instance.get(`show_users/`)
    },
/*    showUserById(userId: number) {
        return instance.get(`${userId}/`)
    },
    createUser(payload: createUserType) {
        return instance.post(`create_user/`, payload)
    },
    updateUser(userId: number, payload: createUserType) {
        return instance.put(`update_user/${userId}/`, payload)
    },
    deleteUser(userId: number) {
        return instance.delete(`delete_user/${userId}/`)
    }*/
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