import { FETCH_KIDS_PRODUCTS } from '../actions/types';

const intitialState = {
    products:[],
    product:{}
}

const KidsProductReducer = (state= intitialState, action) => {
    switch(action.type){
        case FETCH_KIDS_PRODUCTS: 
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}

export default KidsProductReducer;