import { includes, omit, pickBy, identity } from 'lodash';

const ADMIN = 'ADMIN';
const TEST_MANAGER = 'TEST_MANAGER';
const TEST_MANAGER_ALT = 'TESTMANAGER';
const TM = [TEST_MANAGER, TEST_MANAGER_ALT];
// const USER = 'USER';
const TESTEE = 'TESTEE';
const CHECKER = 'CHECKER';

class User {
    constructor(userInfo) {
        const { role, checker, testee } = userInfo;
        const mainRole = role.toUpperCase();

        this.info = omit(userInfo, 'role', 'checker', 'testee', 'roles');

        const roles = {
            [ADMIN]: false,
            [TEST_MANAGER]: false,
            [TESTEE]: false,
            [CHECKER]: false
        };

        if (mainRole === ADMIN) {
            roles[ADMIN] = true;
            roles[TEST_MANAGER] = false;
        }

        if (includes(TM, mainRole)) {
            roles[TEST_MANAGER] = true;
            roles[ADMIN] = false;
        }

        if (testee) {
            roles[TESTEE] = true;
        }

        if (checker) {
            roles[CHECKER] = true;
        }

        this.roles = pickBy(roles, identity);

        this.isSingleRole = !!Object.keys(this.roles).length;
    }

}

const aggregator = {};

export const register = (userInfo) => {
    const user = new User(userInfo);

    aggregator[user.id] = user;

    return user;
};

export const get = (id) => {
    return aggregator[id] || null;
};

export const getAll = () => {
    return aggregator;
};
