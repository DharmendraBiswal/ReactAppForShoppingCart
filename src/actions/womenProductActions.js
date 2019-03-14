import { FETCH_WOMEN_PRODUCTS } from './types';
import axios from 'axios';


export const fetchAllWomenProducts = () => dispatch => {
      axios.get('http://localhost:8083/shopbox/products/women')
        .then(res => dispatch({
            type: FETCH_WOMEN_PRODUCTS,
            payload: res.data
        })).catch(error => {
            console.log(error);
        });

}