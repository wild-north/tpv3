import { get } from 'lodash';
import { createSelector } from 'helpers';
import { user } from './index';

export const info = createSelector(
    user,
    user => get(user, 'info')
);
export const id = createSelector(
    info,
    info => get(info, 'id')
);

export const fullName = createSelector(
    info,
    info => get(info, 'fullName')
);

export const roles = createSelector(
    user,
    user => get(user, 'roles')
);
