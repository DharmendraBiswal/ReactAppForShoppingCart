import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import MenProductReducer from './MenProductReducer';
import WomenProductReducer from './WomenProductReducer';
import KidsProductReducer from './KidsProductReducer';


export default combineReducers({
    UserReducer,
    MenProductReducer,
    WomenProductReducer,
    KidsProductReducer
})
