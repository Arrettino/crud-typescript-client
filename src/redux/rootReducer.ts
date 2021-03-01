import { combineReducers } from 'redux';
import layoutReducer from './reducers/layout';

const rootReducer = combineReducers({ layout: layoutReducer });

export default rootReducer;
