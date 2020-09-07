import { message, messages } from "../data/messages";
import { ADD_MESSAGE, REMOVE_MESSAGE } from "../typesOfReducers/typesOfMessageReducer";

export interface messageAction {
    type: string,
    msg?: string,
    err?: boolean
}

export const messageReducer = (state: message[] = messages, action: messageAction) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state, {
                msg: action.msg === undefined ? "" : action.msg,
                err: action.err === undefined ? false : action.err
            }]

        case REMOVE_MESSAGE:
            return []

        default:
            return state
    }
}