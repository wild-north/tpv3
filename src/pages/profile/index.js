import React, { Suspense, lazy }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { ADMIN_PROFILE, CHECKER_PROFILE, TEST_MANAGER_PROFILE, TESTEE_PROFILE } from 'routes/constants';
import { NavTabs } from 'components/nav-tabs';

const AdminTab = lazy(
    () => import(/* webpackChunkName: "admin-profile" */'pages/profile/admin')
);
const CheckerTab = lazy(
    () => import(/* webpackChunkName: "checker-profile" */'pages/profile/checker')
);
const TestManagerTab = lazy(
    () => import(/* webpackChunkName: "test-manager-profile" */'pages/profile/test-manager')
);
const TesteeTab = lazy(
    () => import(/* webpackChunkName: "testee-profile" */'pages/profile/testee')
);

export const Profile = (props) => {
    const { fullName, tabItems } = props;

    return (
        <div>
            <p><b>{ fullName }'s</b> profile</p>
            <br/>
            <NavTabs items={ tabItems }/>
            <br/>
            <Suspense fallback={ '' }>
                <Switch>
                    <Route path={ ADMIN_PROFILE } exact component={ AdminTab }/>
                    <Route path={ CHECKER_PROFILE } exact component={ CheckerTab }/>
                    <Route path={ TEST_MANAGER_PROFILE } exact component={ TestManagerTab }/>
                    <Route path={ TESTEE_PROFILE } exact component={ TesteeTab }/>
                </Switch>
            </Suspense>
        </div>
    );
};
