import { FETCH_KIDS_PRODUCTS } from './types';
import axios from 'axios';


export const fetchAllKidsProducts = () => dispatch => {
      axios.get('http://localhost:8083/shopbox/products/kids')
        .then(res => dispatch({
            type: FETCH_KIDS_PRODUCTS,
            payload: res.data
        })).catch(error => {
            console.log(error);
        });

}