import * as cnt from 'actions/constants';

const initialState = {
    filmName: '',
    hasError: false,
    isFetching: false,
    errorMessage: null,
    filmInfo: {}
};

export const groups = (state = initialState, { type, payload }) => {

    switch(type) {
        case cnt.FILMS_FETCH:
            return {
                ...state,
                isFetching: true,
                hasError: false
            };

        case cnt.FILMS_SUCCESS:
            return {
                ...state,
                filmInfo: payload
            };

        case cnt.FILMS_ERROR:
            return {
                ...state,
                hasError: true,
                errorMessage: payload
            };

        default:
            return state;
    }
};