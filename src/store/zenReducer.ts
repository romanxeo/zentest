import {createUserType, fastAPI, usersType} from "../api/api"

export const showUsersAC = (users: Array<usersType>) => {
    debugger
    return {
        type: 'TEST/showUsers',
        users
    } as const
}

/*ACTION для запроса на сервер*/
export const getUserAC = (getUser: Array<usersType>) => {
    debugger
    return {
        type: 'TEST/getUser',
        getUser
    } as const
}

/*ACTION для поиска по локальным данным*/
export const searchUserAC = (userId: number) => {
    debugger
    return {
        type: 'TEST/searchUser',
        userId
    } as const
}

export type showUsersAT = ReturnType<typeof showUsersAC>
export type getUserAT = ReturnType<typeof getUserAC>
export type searchUserAT = ReturnType<typeof searchUserAC>

export type actionType = showUsersAT | getUserAT | searchUserAT

type InitStateType = {
    users: Array<usersType>,
    getUser: Array<usersType>
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
            /*ACTION для запроса на сервер*/
            return {...state, getUser: action.getUser}
        }
        case 'TEST/searchUser': {
            /*ACTION для поиска по локальным данным*/
            let copyState = {...state}
            const user = state.users.filter(u => u.id === action.userId)
            copyState.getUser = user
            return copyState
        }
        default: {
            return state
        }
    }
}

//thunk

export const showUsersTC = () => {
    return (dispatch: any) => {
        fastAPI.showUsers()
            .then(res => {
                debugger
                dispatch(showUsersAC(res.data))
            })
            .catch(e => {
                debugger
                alert('error')
            })
    }
}

//thunk
/*THUNK для запроса на сервер*/
export const getUserTC = (user_id: number) => {
    return (dispatch: any) => {
        fastAPI.getUser(user_id)
            .then(res => {
                debugger
                dispatch(showUsersAC(res.data))
            })
            .catch(e => {
                debugger
                alert('error')
            })
    }
}

//thunk
export const createUserTC = (user_name: string, email: string, password: string) => {
    const payload: createUserType = {
        user_name,
        email,
        password
    }
    return (dispatch: any) => {
        fastAPI.createUser(payload)
            .then(res => {
                debugger
                console.log(res.data)
            })
            .catch(e => {
                debugger
                alert('error')
            })
    }
}

