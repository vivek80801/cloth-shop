import { persons, user } from "../data/users";
import { LOG_IN } from "../typesOfReducers/typesOfAuthReducer";


export interface authAction {
    type: string,
    id?: number,
}

export const authReducer = (state: user[] = persons, action: authAction) => {
    const copyState = [...state]
    switch (action.type) {
        case LOG_IN:
            copyState.map(person => action.id === person.id ? person.auth = true : person.auth = false)
            return copyState

        default:
            return [...state]
    }
}