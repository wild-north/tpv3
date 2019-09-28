import {call, put, takeLatest/*all, fork*/} from 'redux-saga/effects';
import { FILMS_FETCH } from 'actions/constants';
import {
    showLoader,
    hideLoader,
    showErrorMessage,
    filmsFetchSuccess
} from 'actions';
import { searchFilm } from 'services/omdb';

export function* processFilms({ payload }) {
    try {
        yield put(showLoader());

        const response = yield call(searchFilm, payload);

        yield put(filmsFetchSuccess(response));
        yield put(hideLoader());
    } catch (err) {
        yield put(hideLoader());
        yield put(showErrorMessage(err.message));
    }
}

export function* watchOMDB() {
    yield takeLatest(FILMS_FETCH, processFilms);
}

////////////// somewhere in the thunk world ///////////////////////
//// (redux example)
//////////////////////////
export function processFilms_1(payload) {
    return async function(dispatch) {
        try {
            dispatch(showLoader());

            const response = await searchFilm(payload);

            dispatch(filmsFetchSuccess(response));
            dispatch(hideLoader());
        } catch (err) {
            dispatch(hideLoader());
            dispatch(showErrorMessage(err.message));
        }
    }
}

















