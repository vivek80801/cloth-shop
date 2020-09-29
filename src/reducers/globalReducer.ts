import { featureProducts } from "../data/featureProducts";
import { allProducts } from "../data/allProducts";
import { ADD_TO_CART, QTY_OF_PRODUCT, REMOVE_FROM_CART, EDIT_PRODUCT } from "../typesOfReducers/typesOfCartReducers";

export interface actions {
    type: string,
    qty?: any,
    id?: number,
    title?: string,
    catogary?: string,
    price?: number,

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

        case EDIT_PRODUCT:
            copyState.map(product => {
                if (product.id === action.id) {
                    product.title = action.title === undefined || action.title === "" ? product.title : action.title;
                    product.price = action.price === undefined || action.price === 1 ? product.price : action.price;
                    product.category = action.catogary === undefined || action.catogary === "" ? product.category : action.catogary;
                }
                return product
            })
            return copyState

        default:
            return copyState
    }

}