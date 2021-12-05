import {applyMiddleware, combineReducers, createStore} from "redux";
import { zenReducer } from "./zenReducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    zen: zenReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;