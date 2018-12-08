import {combineReducers} from 'redux';
import studentReducers from './studentReducers';
import courseReducers from './courseReducers';
import authReducers from './authReducers';

export default combineReducers({
    students:studentReducers,
    courses:courseReducers,
    auth:authReducers
})