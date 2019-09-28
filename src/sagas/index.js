import { fork, all } from 'redux-saga/effects';
import { watchUser } from 'sagas/user';
import { watchLogin } from 'sagas/login';
import { watchOMDB } from 'sagas/omdb';

export default function* rootSaga() {
    yield all([
        fork(watchUser),
        fork(watchLogin),
        fork(watchOMDB)
    ]);
}