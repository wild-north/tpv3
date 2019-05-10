import { ADMIN, CHECKER, TEST_MANAGER, TESTEE } from 'services/user/user';
import { ADMIN_PROFILE, CHECKER_PROFILE, TEST_MANAGER_PROFILE, TESTEE_PROFILE } from 'routes/constants';

export const userProfileTabs = {
    [ADMIN]: {to: ADMIN_PROFILE, text: 'Admin'},
    [CHECKER]: {to: CHECKER_PROFILE, text: 'Checker'},
    [TEST_MANAGER]: {to: TEST_MANAGER_PROFILE, text: 'Test Manager'},
    [TESTEE]: {to: TESTEE_PROFILE, text: 'Testee'}
};

export const breadcrumbsRoutes = {
    '/': 'Home',
    '/profile': null,
    '/profile/:id': null,
    '/profile/:id/admin': 'Admin Profile',
    '/profile/:id/checker': 'Checker Profile',
    '/profile/:id/test-manager': 'Test-Manager Profile',
    '/profile/:id/testee': 'Testee Profile'
};