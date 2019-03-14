import { FETCH_MEN_PRODUCTS } from '../actions/types';

const intitialState = {
    products:[],
    product:{}
}

const MenProductReducer = (state= intitialState, action) => {
    switch(action.type){
        case FETCH_MEN_PRODUCTS: 
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}

export default MenProductReducer;