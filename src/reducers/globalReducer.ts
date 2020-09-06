import { featureProducts } from "../data/featureProducts";
import { allProducts } from "../data/allProducts";
import { ADD_TO_CART, QTY_OF_PRODUCT, REMOVE_FROM_CART } from "../typesOfReducers/typesOfCartReducers";

export interface actions {
    type: string,
    qty?: any,
    id?: number
}

export const globalReducer = (state: featureProducts[] = allProducts, action: actions) => {
    const copyState = [...state]
    switch (action.type) {
        case ADD_TO_CART:
            copyState.map(product =>
                action.id === product.id && product.avaiblity ? product.inCart = true : product.inCart
            )
            return copyState
        case QTY_OF_PRODUCT:
            copyState.map(product => action.id === product.id ? product.qty = action.qty : product.qty)
            return copyState
        case REMOVE_FROM_CART:
            copyState.map(product => product.id === action.id ? product.inCart = false : product.inCart)
            return copyState
        default:
            return copyState
    }

}