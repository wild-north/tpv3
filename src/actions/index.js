import { createAction } from 'helpers';
import * as cnt from './constants';

export const fetchCurrentUser = createAction(cnt.CURRENT_USER_FETCH_REQUEST);
export const fetchCurrentUserSuccess = createAction(cnt.CURRENT_USER_FETCH_SUCCESS);
export const fetchCurrentUserError = createAction(cnt.CURRENT_USER_FETCH_ERROR);

export const setActiveGroup = createAction(cnt.SET_ACTIVE_GROUP);

export const showLoader = createAction(cnt.LOADER_SHOW);
export const hideLoader = createAction(cnt.LOADER_HIDE);

export const login = createAction(cnt.LOGIN_REQUEST);

export const fetchFilms = createAction(cnt.FILMS_FETCH);
export const showErrorMessage = createAction(cnt.FILMS_ERROR);
export const filmsFetchSuccess = createAction(cnt.FILMS_SUCCESS);
