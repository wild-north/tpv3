import { get } from 'lodash';
import { createSelector } from 'helpers';
import { common } from './index';

export const showLoader = createSelector(
    common,
    common => get(common, 'showLoader')
);
