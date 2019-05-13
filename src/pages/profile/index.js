import React, { Suspense, lazy }  from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as routes from 'routes/constants';
import { NavTabs } from 'components/nav-tabs';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';

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
                    <Route path={ routes.ADMIN_PROFILE } exact component={ AdminTab }/>
                    <Route path={ routes.CHECKER_PROFILE } exact component={ CheckerTab }/>
                    <Route path={ routes.TEST_MANAGER_PROFILE } exact component={ TestManagerTab }/>
                    <Route path={ routes.TESTEE_PROFILE } exact component={ TesteeTab }/>
                    {
                        !isEmpty(tabItems) && (
                            <Redirect from={ routes.PROFILE_PAGE } to={ tabItems[0].to } />
                        )
                    }
                </Switch>
            </Suspense>
        </div>
    );
};

Profile.propTypes = {
    tabItems: PropTypes.array.isRequired
};
