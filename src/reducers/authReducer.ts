import { persons, user } from "../data/users";
import { LOG_IN, REGISTER_ACCOUNT, LOG_OUT } from "../typesOfReducers/typesOfAuthReducer";
import { v4 } from "uuid";
import { Gender } from "../data/users";


export interface authAction {
    type: string,
    id?: string,
    userName?: string,
    email?: string,
    password?: string,
    gender?: Gender,
}

export const authReducer = (state: user[] = persons, action: authAction) => {
    const copyState = [...state]
    switch (action.type) {
        case LOG_OUT:
            copyState.map(person =>  person.auth = false )
            return copyState

        case LOG_IN:
            copyState.map(person => action.id === person.id ? person.auth = true : person.auth = false)
            return copyState

        case REGISTER_ACCOUNT:
            copyState.push({ id: v4(), name: action.userName !== undefined ? action.userName : "user", password: action.password !== undefined ? action.password : "user123", email: action.email !== undefined ? action.email : "user@gmail.com", auth: true, role: "user", gender: action.gender !== undefined ? action.gender : "Male", })
            return copyState

        default:
            return [...state]
    }
}