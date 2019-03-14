import { FETCH_MEN_PRODUCTS } from './types';
import axios from 'axios';


export const fetchAllMenProducts = () => dispatch => {
      axios.get('http://localhost:8083/shopbox/products/men')
        .then(res => dispatch({
            type: FETCH_MEN_PRODUCTS,
            payload: res.data
        })).catch(error => {
            console.log(error);
        });

}