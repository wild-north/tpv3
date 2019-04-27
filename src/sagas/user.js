import { call, put, takeLatest/*, all, fork*/ } from 'redux-saga/effects';
import { CURRENT_USER_FETCH_REQUEST } from 'actions/constants';
import {
    fetchCurrentUserError,
    fetchCurrentUserSuccess
} from 'actions';
import { getUser } from 'services/user';

export function* fetchCurrentUser() {
    try {
        const userData = yield call(getUser);

        yield put(fetchCurrentUserSuccess(userData));
    } catch (e) {
        yield put(fetchCurrentUserError(e.message));
    }
}

export function* watchUser() {
    yield takeLatest(CURRENT_USER_FETCH_REQUEST, fetchCurrentUser);
}
