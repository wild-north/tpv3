import { connect } from 'react-redux';
import { setCurrentUser } from 'actions';
import { userFullName } from 'selectors';

export const appConnector = connect(null, {
    setCurrentUser
});

const headerSelector = state => ({
    fullName: userFullName(state)
});

export const headerConnector = connect(headerSelector, {});