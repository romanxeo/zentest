import axios from "axios";

const instance = axios.create({
/*    baseURL: 'http://localhost:3000',*/
    withCredentials: true,
})

export const fastAPI = {
    showUsers() {
        return instance.get(`show_users/`)
    },
    createUser(payload: createUserType) {
        return instance.post(`create_user/`, payload)
    },
    getUser(user_id: number) {
        return instance.get(`${user_id}/`)
    },
}

/*export const testAPI = {
    createUser(payload: createUserType) {
        return axios.post(`create_user/`, payload, {withCredentials: true,})
    },
}*/
/*

    updateUser(userId: number, payload: createUserType) {
        return instance.put(`update_user/${userId}/`, payload)
    },
    deleteUser(userId: number) {
        return instance.delete(`delete_user/${userId}/`)
    }*/
/*}*/

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