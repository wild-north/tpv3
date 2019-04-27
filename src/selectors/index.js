import { getStoreState } from 'helpers/store';
import { get } from 'lodash';
import { createSelector } from 'helpers';

export const user = () => get(getStoreState(), 'user');

export const userId = createSelector(
    user,
    user => get(user, 'id')
);

export const userInfo = createSelector(
    user,
    user => get(user, 'info')
);

export const userFullName = createSelector(
    userInfo,
    userInfo => get(userInfo, 'fullName')
);

// export const userFullName = state => get(state, 'user.info.fullName');
