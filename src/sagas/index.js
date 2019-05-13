import { fork, all } from 'redux-saga/effects';
import { watchUser } from 'sagas/user';
import { watchLogin } from 'sagas/login';

export default function* rootSaga() {
    yield all([
        fork(watchUser),
        fork(watchLogin)
    ]);
}