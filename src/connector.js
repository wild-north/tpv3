import { createSelector, createConnector } from 'helpers';
import { fetchCurrentUser } from 'actions';
import { fullName, roles, id } from 'selectors/user';
import { showLoader } from 'selectors/common';
import { NO_ACTION } from 'selectors';

const appSelector = createSelector(
    [roles, id],
    (currentUserRoles, currentUserId) => ({
        currentUserRoles,
        currentUserId
    })
);

export const appConnector = createConnector(appSelector, {
    fetchCurrentUser
});

const headerSelector = createSelector(
    fullName,
    fullName => ({ fullName })
);

export const headerConnector = createConnector(headerSelector, NO_ACTION);

const lockerSelector = createSelector(
    showLoader,
    predicate => ({ predicate })
);

export const lockerConnector = createConnector(lockerSelector, NO_ACTION);