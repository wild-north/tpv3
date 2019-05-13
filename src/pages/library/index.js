import React, { Suspense, lazy }  from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as routes from 'routes/constants';
import { NavTabs } from 'components/nav-tabs';
import { libraryTabs } from 'config';

const LibraryTests = lazy(
    () => import(/* webpackChunkName: "library-tests" */'pages/library/tests')
);
const LibraryTopics = lazy(
    () => import(/* webpackChunkName: "library-topics" */'pages/library/topics')
);

export const Library = (props) => {
    return (
        <div>
            <NavTabs items={ libraryTabs }/>
            <br/>
            <Suspense fallback={ '' }>
                <Switch>
                    <Route path={ routes.LIBRARY_TESTS } exact component={ LibraryTests }/>
                    <Route path={ routes.LIBRARY_TOPICS } exact component={ LibraryTopics }/>
                    <Redirect from={ routes.LIBRARY } to={ routes.LIBRARY_TOPICS } />
                </Switch>
            </Suspense>
        </div>
    );
};
