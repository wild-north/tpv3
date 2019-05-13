import { get } from 'lodash';
import { createSelector } from 'helpers';
import { groups } from './index';

export const activeGroupId = createSelector(
    groups,
    groups => get(groups, 'activeGroupId')
);
