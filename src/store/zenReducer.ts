import {createUserType, fastAPI, usersType} from "../api/api"
import { AppRootStateType } from "./store"

/*ACTION для запроса всех юзеров с сервера (работает)*/
export const showUsersAC = (users: Array<usersType>) => {
    return {
        type: 'TEST/showUsers',
        users
    } as const
}

/*ACTION для запроса на определенного юзера с сервера (работает)*/
export const getUserAC = (getUser: Array<usersType>) => {
    return {
        type: 'TEST/getUser',
        getUser
    } as const
}

/*ACTION для очистки getUser (работает)*/
export const clearGetUserAC = () => {
    return {
        type: 'TEST/clearGetUser',
    } as const
}

export type showUsersAT = ReturnType<typeof showUsersAC>
export type getUserAT = ReturnType<typeof getUserAC>
export type clearGetUserAT = ReturnType<typeof clearGetUserAC>

export type actionType = showUsersAT | getUserAT | clearGetUserAT

type InitStateType = {
    users: Array<usersType>,
    getUser: Array<usersType>,
}
export const initState: InitStateType = {
    users: [],
    getUser: [],
}

export const zenReducer = (state: InitStateType = initState, action: actionType): InitStateType => {
    switch (action.type) {
        case 'TEST/showUsers': {
            return {...state, users: action.users}
        }
        case 'TEST/getUser': {
            return {...state, getUser: action.getUser}
        }
        case 'TEST/clearGetUser': {
            return {...state, getUser: []}
        }
        default: {
            return state
        }
    }
}

//thunk
//Для запроса всех юзеров с сервера (работает)
export const showUsersTC = () => {
    return (dispatch: any) => {
        fastAPI.showUsers()
            .then(res => {
                dispatch(showUsersAC(res.data))
            })
            .catch(e => {
                alert('showUsersTC failed')
            })
    }
}

//THUNK
//для запроса на определенного юзера с сервера (не работает)
export const getUserTC = (user_id: number) => {
    return (dispatch: any) => {
        fastAPI.getUser(user_id)
            .then(res => {
                dispatch(getUserAC(res.data))
            })
            .catch(e => {
                alert('getUserTC failed')
            })
    }
}

//thunk
//create user для отправки нового юзера на сервер (работает)
export const createUserTC = (user_name: string, email: string, password: string) => {
    return (dispatch: any) => {

        let d = new Date();
        let curr_date = d.getDate();
        let curr_month = d.getMonth() + 1;
        let curr_year = d.getFullYear();
        let create_date = curr_year + "-" + curr_month + "-" + curr_date

        const payload: createUserType = {
            user_name,
            email,
            password,
            status: 'active',
            created_at: create_date,
            updated_at: null
        }

        fastAPI.createUser(payload)
            .then(res => {
                dispatch(showUsersTC())
            })
            .catch(e => {
                alert('createUserTC failed')
            })
    }
}

//thunk
// для удаления юзера с сервера (работает)
export const deleteUserTC = (user_id: number) => {
    return (dispatch: any) => {
        fastAPI.deleteUser(user_id)
            .then(res => {
                dispatch(clearGetUserAC())
                dispatch(showUsersTC())
            })
            .catch(e => {
                alert('deleteUserTC error')
            })
    }
}

//thunk
//update user для обновления инфы о юзере и отправке на сервер (работает)
export const updateUserTC = (id: number, user_name: string, email: string, password: string, created_at: string) => {
    return (dispatch: any) => {

        let d = new Date();
        let curr_date = d.getDate();
        let curr_month = d.getMonth() + 1;
        let curr_year = d.getFullYear();
        let update_date = curr_year + "-" + curr_month + "-" + curr_date

        const payload: createUserType = {
            user_name,
            email,
            password,
            status: 'active',
            created_at,
            updated_at: update_date
        }

        fastAPI.updateUser(id, payload)
            .then(res => {
                dispatch(showUsersTC())
            })
            .catch(e => {
                alert('updateUserTC error')
            })
    }
}

