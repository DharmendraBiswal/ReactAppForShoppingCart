import { FETCH_ALL_USERS,NEW_USER, USER_LOGIN,USER_LOGOUT,USER_LOGIN_ERROR } from '../actions/types';

const intitialState = {
    users:[],
    user:{},
    loginData:{},
    status:false,
    requestFailed:false
}

const UserReducer = (state= intitialState, action) => {
    switch(action.type){
        case FETCH_ALL_USERS: 
            return {
                ...state,
                users: action.payload
            }
        case NEW_USER:
            return {
                ...state,
                user: action.payload,
                status:true
            }
        case USER_LOGIN:
            return {
                ...state,
                loginData: action.payload
            }
        case USER_LOGOUT:
           // return {
                 //...state,
                state = undefined;
                return state;
           // }
        case USER_LOGIN_ERROR:
      
            return {
                ...state.requestFailed=true,
                loginData: action.payload,
            }
        default:
            return state;
    }
}

export default UserReducer;
