import * as cnt from 'actions/constants';

const initialState = {
    isFetching: false,
    isError: false
};

export const user = (state = initialState, action) => {
    switch(action.type) {
        case cnt.CURRENT_USER_FETCH_REQUEST:
            return { ...state, isFetching: true };

        case cnt.CURRENT_USER_FETCH_SUCCESS:
            return { ...state, ...action.payload };

        case cnt.CURRENT_USER_FETCH_ERROR:
            return { ...state, isError: true };

        default:
            return state;
    }
};