import { createAction } from 'helpers';
import * as cnt from './constants';

export const fetchCurrentUser = createAction(cnt.CURRENT_USER_FETCH_REQUEST);
export const fetchCurrentUserSuccess = createAction(cnt.CURRENT_USER_FETCH_SUCCESS);
export const fetchCurrentUserError = createAction(cnt.CURRENT_USER_FETCH_ERROR);

// const createTriplet = (constants) => ({
//    fetch:  createAction(constants[0]),
//    success:  createAction(constants[1]),
//    error:  createAction(constants[2])
// });