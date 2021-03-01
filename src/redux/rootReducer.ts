import { combineReducers } from 'redux';
import layoutReducer from './reducers/layout';
import langReducer from './reducers/lang';

const rootReducer = combineReducers({ layout: layoutReducer, lang: langReducer });

export default rootReducer;
