import { call, put, takeLatest/*, all, fork*/ } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from 'actions/constants';
import {
    showLoader,
    hideLoader
} from 'actions';
import { login } from 'services/user';

export function* loginAttempt({ payload }) {
    try {
        yield put(showLoader());

        const response = yield call(login, payload);

        console.log(response);

        // yield put(fetchCurrentUserSuccess(userData));
        yield put(hideLoader());
    } catch (e) {
        // yield put(fetchCurrentUserError(e.message));
        yield put(hideLoader());
    }
}

export function* watchLogin() {
    yield takeLatest(LOGIN_REQUEST, loginAttempt);
}
