import React, { Suspense, lazy, useEffect }  from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as routes from 'routes/constants';
import { NavTabs } from 'components/nav-tabs';

const GroupTests = lazy(
    () => import(/* webpackChunkName: "library-tests" */'pages/groups/details/group-tests')
);
const TesteeList = lazy(
    () => import(/* webpackChunkName: "library-topics" */'pages/groups/details/testee-list')
);

export const GroupDetails = ({ tabItems, match, setActiveGroup }) => {
    useEffect(() => {
        setActiveGroup(match.params.id);
    }, [setActiveGroup]);

    const groupId = match.params.id;

    return (
        <div>
            <NavTabs items={ tabItems }/>
            <br/>
            <Suspense fallback={ '' }>
                <Switch>
                    <Route path={ routes.GROUP_TESTEE_LIST } exact render={ () => <TesteeList groupId={groupId}/> }/>
                    <Route path={ routes.GROUP_TESTS } exact render={ () => <GroupTests groupId={groupId}/> }/>
                    <Redirect from={ routes.GROUP_DETAILS } to={ routes.GROUP_TESTEE_LIST } />
                </Switch>
            </Suspense>
        </div>
    );
};
