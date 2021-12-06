import {createUserType, fastAPI, usersType} from "../api/api"

/*ACTION для запроса всех юзеров с сервера (работает)*/
export const showUsersAC = (users: Array<usersType>) => {
    return {
        type: 'TEST/showUsers',
        users
    } as const
}

/*ACTION для запроса на определенного юзера с сервера (не работает)*/
export const getUserAC = (getUser: Array<usersType>) => {
    return {
        type: 'TEST/getUser',
        getUser
    } as const
}

/*ACTION для поиска юзера по локальной базе (работает)*/
export const searchUserAC = (userId: number) => {
    return {
        type: 'TEST/searchUser',
        userId
    } as const
}

/*ACTION для добавления юзера в локальную базу (работает)*/
export const createUserAC = (user_name: string, email: string, password: string) => {
    return {
        type: 'TEST/createUser',
        payload: {
            user_name,
            email,
            password
        }
    } as const
}

/*ACTION для обновления юзера в локальной базе (работает)*/
export const updateUserAC = (id: number, user_name: string, email: string, password: string) => {
    return {
        type: 'TEST/updateUser',
        id,
        payload: {
            user_name,
            email,
            password
        }
    } as const
}

/*ACTION для удаления юзера из локальной базы (работает)*/
export const deleteUserAC = (userId: number) => {
    debugger
    return {
        type: 'TEST/deleteUser',
        userId
    } as const
}

export type showUsersAT = ReturnType<typeof showUsersAC>
export type getUserAT = ReturnType<typeof getUserAC>
export type searchUserAT = ReturnType<typeof searchUserAC>
export type deleteUserAT = ReturnType<typeof deleteUserAC>
export type updateUserAT = ReturnType<typeof updateUserAC>
export type createUserAT = ReturnType<typeof createUserAC>

export type actionType = showUsersAT | getUserAT | searchUserAT | deleteUserAT | updateUserAT | createUserAT

type InitStateType = {
    users: Array<usersType>,
    getUser: Array<usersType>,
    count: number
}
export const initState: InitStateType = {
    users: [],
    getUser: [],
    count: 0
}

export const zenReducer = (state: InitStateType = initState, action: actionType): InitStateType => {
    switch (action.type) {
        case 'TEST/showUsers': {
            /*ACTION для запроса всех юзеров с сервера (работает)*/
            return {...state, users: action.users, count: action.users.length}
        }
        case 'TEST/getUser': {
            /*ACTION для запроса на определенного юзера с сервера (не работает)*/
            return {...state, getUser: action.getUser}
        }
        case 'TEST/searchUser': {
            /*ACTION для поиска юзера по локальной базе (работает)*/
            let copyState = {...state}
            const user = state.users.filter(u => u.id === action.userId)
            copyState.getUser = user
            return copyState
        }
        case 'TEST/createUser': {
            /*ACTION для добавления юзера в локальную базу (работает)*/
            let newUser = {...action.payload, id: state.count+1, status: 'noactive', created_at: 'today', updated_at: 'today'}
            let copyState = {...state, users: [...state.users, newUser], count: state.count+1}
            return copyState
        }
        case 'TEST/updateUser': {
            /*ACTION для обновления юзера в локальной базе (работает)*/
            let copyState = {...state}
            copyState.users = state.users.map(u => u.id === action.id ? {...u, ...action.payload}: u)
            return copyState
        }
        case 'TEST/deleteUser': {
            /*ACTION для удаления юзера из локальной базы (работает)*/
            let copyState = {...state}
            const users = state.users.filter(u => u.id !== action.userId && u)
            copyState.getUser = []
            copyState.users = users
            return copyState
        }
        default: {
            return state
        }
    }
}

//thunk Для запроса всех юзеров с сервера (работает)
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


/*THUNK для запроса на определенного юзера с сервера (не работает)*/
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
//create user для отправки нового юзера на сервер (не работает)
export const createUserTC = (user_name: string, email: string, password: string) => {
    const payload: createUserType = {
        user_name,
        email,
        password
    }
    return (dispatch: any) => {
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
//update user для обновления инфы о юзере и отправке на сервер (не работает)
export const updateUserTC = (id: number, user_name: string, email: string, password: string) => {
    const payload: createUserType = {
        user_name,
        email,
        password
    }
    return (dispatch: any) => {
        fastAPI.updateUser(id, payload)
            .then(res => {
                dispatch(showUsersTC())
            })
            .catch(e => {
                alert('error')
            })
    }
}



//thunk для удаления юзера с сервера (не работает)
export const deleteUserTC = (user_id: number) => {
    return (dispatch: any) => {
        fastAPI.deleteUser(user_id)
            .then(res => {
                dispatch(showUsersTC())
            })
            .catch(e => {
                alert('error')
            })
    }
}