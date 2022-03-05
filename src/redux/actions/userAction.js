import {SET_CONNECTION, SET_USER_DATA} from "../reducers/userReducer";

export const setUser = (user) => {
    return {
        type : SET_USER_DATA,
        value : user
    }
}

export const setConnection = (value) => {
    return {
        type : SET_CONNECTION,
        value : value
    }
}