import {fastAPI, usersType} from "../api/api"

export const showUsersAC = (users: Array<usersType>) => {
    debugger
    return {
        type: 'TEST/showUsers',
        users
    } as const
}

export type showUsersAT = ReturnType<typeof showUsersAC>


export type actionType = showUsersAT

/*export type usersType = {
    id: number,
}*/

type InitStateType = {
    users: Array<usersType>,
}
export const initState: InitStateType = {
    users: [],

}

/*export const initState: InitStateType = {
    users: [
        {id: 1,
        user_name: 'user_name',
        email: "email",
        password: "password",
        status: "active",
        created_at: "2021-11-05",
        updated_at: null},
        {id: 2,
            user_name: 'user_name2',
            email: "email2",
            password: "password2",
            status: "active2",
            created_at: "2021-11-052",
            updated_at: null}
    ],
}*/

export const zenReducer = (state: InitStateType = initState, action: actionType): InitStateType => {
    switch (action.type) {
        case 'TEST/showUsers': {
            return {...state, users: action.users}
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

