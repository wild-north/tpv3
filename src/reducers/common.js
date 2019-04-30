import * as cnt from 'actions/constants';

const initialState = {
    showLoader: false
};

export const common = (state = initialState, action) => {
    switch(action.type) {
        case cnt.LOADER_SHOW:
            return { ...state, showLoader: true };

        case cnt.LOADER_HIDE:
            return { ...state, showLoader: false };

        default:
            return state;
    }
};