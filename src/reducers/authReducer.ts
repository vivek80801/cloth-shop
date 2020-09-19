import { persons, user } from "../data/users";
import { LOG_IN, REGISTER_ACCOUNT } from "../typesOfReducers/typesOfAuthReducer";


export interface authAction {
    type: string,
    id?: number,
    userName?: string,
    email?: string,
    password?: string,
}

export const authReducer = (state: user[] = persons, action: authAction) => {
    const copyState = [...state]
    switch (action.type) {
        case LOG_IN:
            copyState.map(person => action.id === person.id ? person.auth = true : person.auth = false)
            return copyState

        case REGISTER_ACCOUNT:
            copyState.push({ id: copyState.length + 1, name: action.userName !== undefined ? action.userName : "", password: action.password !== undefined ? action.password : "", email: action.email !== undefined ? action.email : "", auth: true })
            return copyState

        default:
            return [...state]
    }
}