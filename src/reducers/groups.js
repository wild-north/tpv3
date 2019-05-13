import * as cnt from 'actions/constants';

const initialState = {
    activeGroupId: null
};

export const groups = (state = initialState, action) => {
    switch(action.type) {
        case cnt.SET_ACTIVE_GROUP:
            return { ...state, activeGroupId: action.payload };

        default:
            return state;
    }
};