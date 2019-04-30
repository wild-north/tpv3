import { getStoreState } from 'helpers/store';
import { get } from 'lodash';
// import { createSelector } from 'helpers';

export const NO_ACTION = {};

export const user = () => get(getStoreState(), 'user');
export const common = () => get(getStoreState(), 'common');
