import { combineReducers } from 'redux';
import { common } from './common';
import { user } from './user';

export const reducer = combineReducers({
    common,
    user
});