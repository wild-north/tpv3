import { combineReducers } from 'redux';
import { user } from './user';
import { common } from './common';

export const reducer = combineReducers({
    user,
    common
});