import { persons, user } from "../data/users";
import { LOG_IN, REGISTER_ACCOUNT, LOG_OUT, DELETE_ACCOUNT, UPDATE_ACCOUNT, PURSCHE_PRODUCT, REPORT_USER, UNREPORT_USER, BAN_USER, UNBAN_USER } from "../typesOfReducers/typesOfAuthReducer";
import { v4 } from "uuid";
import { Gender } from "../data/users";
import { featureProducts } from "../data/featureProducts";


export interface authAction {
    type: string,
    id?: string,
    userName?: string,
    email?: string,
    password?: string,
    gender?: Gender,
    allProducts?: featureProducts[],
}

export const authReducer = (state: user[] = persons, action: authAction) => {
    const copyState = [...state]
    switch (action.type) {
        case LOG_OUT:
            copyState.map(person => person.auth = false)
            return copyState

        case LOG_IN:
            copyState.map(person => action.id === person.id && person.banned === false ? person.auth = true : person.auth = false)
            return copyState

        case DELETE_ACCOUNT:
            return [
                ...state.filter(user => action.id !== user.id)
            ];

        case UPDATE_ACCOUNT:
            copyState.map(user => {
                if (action.id === user.id) {
                    user.name = action.userName !== undefined && action.userName !== "" ? action.userName : user.name
                    user.password = action.password !== undefined && action.password !== "" ? action.password : user.password
                    user.email = action.email !== undefined && action.email !== "" ? action.email : user.email;
                    user.gender = action.gender !== undefined ? action.gender : user.gender
                }
                return user
            })
            return copyState

        case REGISTER_ACCOUNT:
            copyState.push({ id: v4(), name: action.userName !== undefined ? action.userName : "user", password: action.password !== undefined ? action.password : "user123", email: action.email !== undefined ? action.email : "user@gmail.com", auth: true, role: "user", gender: action.gender !== undefined ? action.gender : "Male", pursched_Products: [], comments: [], img: "", banned: false, reported: false })
            return copyState

        case PURSCHE_PRODUCT:
            if (action.allProducts !== undefined) {
                action.allProducts.map(product => {
                    if (product.inCart) {
                        copyState.map(user => {
                            if (user.auth) {
                                if (user.pursched_Products.length === 0) {
                                    user.pursched_Products.push(product)
                                } else {
                                    user.pursched_Products.map(pursched_Product => {
                                        if (pursched_Product.id !== product.id) {
                                            user.pursched_Products.push(product)
                                        }
                                        return user.pursched_Products
                                    })
                                }
                            }
                            return user.pursched_Products
                        })
                    }
                    return product
                })
            }
            return copyState

        case BAN_USER:
            copyState.map(user => user.id === action.id ? user.banned = true : user)
            return copyState

        case UNBAN_USER:
            copyState.map(user => user.id === action.id ? user.banned = false : user)
            return copyState

        case REPORT_USER:
            copyState.map(user => user.id === action.id ? user.reported = true : user)
            return copyState

        case UNREPORT_USER:
            copyState.map(user => user.id === action.id ? user.reported = false : user)
            return copyState

        default:
            return [...state]
    }
}