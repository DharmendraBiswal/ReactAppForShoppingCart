import { FETCH_ALL_USERS,NEW_USER,USER_LOGIN,USER_LOGOUT,USER_LOGIN_ERROR  } from './types';
import axios from 'axios';

export const fetchAllCustomers = () => dispatch => {
      axios.get('http://localhost:8083/shopbox/customers')
        .then(res => dispatch({
            type: FETCH_ALL_USERS,
            payload: res.data
        })).catch(error => {
            console.log(error);
        });

}

export const createNewUser = (userData) => dispatch => {
    const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    }
        };
    axios.post('http://localhost:8083/shopbox/customer', JSON.stringify(userData), config)
    .then(res => dispatch({
        type:NEW_USER,
        payload: res.data
    })).catch(error =>console.log(error));
       
}


// export const validateLogin = (userName,password) => dispatch => {
//       axios.get('http://localhost:8083/shopbox/customer?userName='+userName+'&password='+password)
//         .then(res => dispatch({
//              type:USER_LOGIN,
//              payload: res.data
//         }))
//          .catch(error => {
//             console.log(error);
//         });

// }

export const validateLogin = (userData) => dispatch => {
    const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    }
        };
      axios.post('http://localhost:8083/shopbox/customerLogin',JSON.stringify(userData), config)
       .then(res => dispatch({
             type:USER_LOGIN,
             payload: res
        }))
         .catch(error =>  dispatch({
        type:USER_LOGIN_ERROR,
        payload:error.response
    }));

}

export const userLogOut = () =>dispatch =>{
    dispatch({
        type:USER_LOGOUT,
        payload:undefined
    })

}