import { get } from 'lodash';

export const user = state => get(state, 'user');
export const userId = user => get(user, 'id');
export const userFullName = state => get(state, 'user.info.fullName');
