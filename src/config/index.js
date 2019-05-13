import { ADMIN, CHECKER, TEST_MANAGER, TESTEE } from 'services/user/user';
import * as routes from 'routes/constants';

export const userProfileTabs = {
    [ADMIN]: {to: routes.ADMIN_PROFILE, text: 'Admin', sortOrder: 1},
    [TEST_MANAGER]: {to: routes.TEST_MANAGER_PROFILE, text: 'Test Manager', sortOrder: 1},
    [CHECKER]: {to: routes.CHECKER_PROFILE, text: 'Checker', sortOrder: 2},
    [TESTEE]: {to: routes.TESTEE_PROFILE, text: 'Testee', sortOrder: 3}
};

export const breadcrumbsRoutes = {
    '/': 'Home',

    '/profile': null,
    '/profile/:id': 'Profile',
    '/profile/:id/admin': 'Admin',
    '/profile/:id/checker': 'Checker',
    '/profile/:id/test-manager': 'Test-Manager',
    '/profile/:id/testee': 'Testee',

    '/groups': 'Groups',
    '/groups/:id': 'Group',
    '/groups/:id/testees': 'Testees',
    '/groups/:id/test-events': 'Test Events',

    '/library': 'Library',
    '/library/topics': 'Topics',
    '/library/tests': 'Tests',

    '/results': 'Results',
    '/users': 'Users'
};

export const mainNavigation = [
    { to: routes.GROUPS, text: 'GROUPS' },
    { to: routes.LIBRARY, text: 'LIBRARY' },
    { to: routes.RESULTS, text: 'RESULTS' },
    { to: routes.USERS, text: 'USERS' }
];

export const libraryTabs = [
    { to: routes.LIBRARY_TESTS, text: 'Tests' },
    { to: routes.LIBRARY_TOPICS, text: 'Topics' }
];

export const fetchOptions = {
    headers: {
        'content-type': 'application/json; charset=UTF-8;',
        Accept: 'application/json, text/javascript, */*; q=0.01'
    },
    credentials: 'same-origin'
};