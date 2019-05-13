import { combineReducers } from 'redux';
import { user } from './user';
import { common } from './common';
import { groups } from './groups';

export const reducer = combineReducers({
    user,
    common,
    groups
});