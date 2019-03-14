import { FETCH_WOMEN_PRODUCTS } from '../actions/types';

const intitialState = {
    products:[],
    product:{}
}

const WomenProductReducer = (state= intitialState, action) => {
    switch(action.type){
        case FETCH_WOMEN_PRODUCTS: 
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}

export default WomenProductReducer;