import { persons, user } from "../data/users";
import { LOG_IN } from "../typesOfReducers/typesOfAuthReducer";
import { messageAction } from "../reducers/messageReducer";
import { ADD_MESSAGE, REMOVE_MESSAGE } from "../typesOfReducers/typesOfMessageReducer";

export interface authAction {
    type: string,
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    msg?: string,
    err?: boolean,
    dispatchMessage?: React.Dispatch<messageAction>
}

export const authReducer = (state: user[] = persons, action: authAction) => {
    const copyState = [...state]
    switch (action.type) {
        case LOG_IN:
            copyState.map((user) => {
                if (action.name === "" && action.password === "") {
                    if (action.dispatchMessage !== undefined) {
                        return (action.dispatchMessage({ type: REMOVE_MESSAGE }), action.dispatchMessage({ type: ADD_MESSAGE, err: true, msg: "Please fill the form" }))
                    }
                }
                else if (action.name === user.name && action.password === user.password) {
                    user.auth = true
                    if (action.dispatchMessage !== undefined) {
                        return action.dispatchMessage({ type: ADD_MESSAGE, err: false, msg: "You are logged in" })
                    }
                } else {
                    user.auth = false
                    if (action.dispatchMessage !== undefined) {
                        return (action.dispatchMessage({ type: REMOVE_MESSAGE }), action.dispatchMessage({ type: ADD_MESSAGE, err: true, msg: "User name or password is wrong" }))
                    }
                }
                return user
            })
            return copyState

        default:
            return [...state]
    }
}