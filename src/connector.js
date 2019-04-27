import { createSelector, createConnector } from 'helpers';
import { fetchCurrentUser } from 'actions';
import { userFullName } from 'selectors';

export const appConnector = createConnector(null, {
    fetchCurrentUser
});

const headerSelector = createSelector(
    userFullName,
    fullName => ({ fullName })
);

export const headerConnector = createConnector(headerSelector, {});

// const lockerSelector = createSelector();
//
// export const lockerConnector = createConnector(lockerSelector, {});