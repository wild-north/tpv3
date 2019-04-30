import { call, put, takeLatest/*, all, fork*/ } from 'redux-saga/effects';
import { CURRENT_USER_FETCH_REQUEST } from 'actions/constants';
import {
    fetchCurrentUserError,
    fetchCurrentUserSuccess,
    showLoader,
    hideLoader
} from 'actions';
import { getUser } from 'services/user';

export function* fetchCurrentUser() {
    try {
        yield put(showLoader());

        const userData = yield call(getUser);

        yield put(fetchCurrentUserSuccess(userData));
        yield put(hideLoader());
    } catch (e) {
        yield put(fetchCurrentUserError(e.message));
        yield put(hideLoader());
    }
}

export function* watchUser() {
    yield takeLatest(CURRENT_USER_FETCH_REQUEST, fetchCurrentUser);
}
