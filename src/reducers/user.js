import * as cnt from 'actions/constants';

const initialState = {};

export const user = (state = initialState, action) => {
    switch(action.type) {
        case cnt.SET_CURRENT_USER:
            return { ...action.payload };

        default:
            return state;
    }
};