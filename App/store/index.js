import {combineReducers, createStore} from 'redux';
import loader from './reducer/loader';

let rootReducer = combineReducers({loader});

export default createStore(rootReducer);
