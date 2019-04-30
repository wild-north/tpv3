import React from 'react';
import { Route } from 'react-router-dom';
import { createSelector, createConnector } from 'helpers';
import { fetchCurrentUser } from 'actions';
import { reduce, keys, forEach } from 'lodash';

import { user } from 'selectors';

// export const routeConnector = createConnector(routeSelector, {});

const connectRouteWithDeps = (deps) => {
    const depsValues = reduce(deps, (dependency, arr)  => {
        arr.push(dependency.selector);

        return arr;
    }, []);

    const depsNames = keys(depsValues);

    const selector = (selectors) => createSelector(
        selectors,
        (...computedSelectors) => {
            return reduce(depsNames, (name, props, index) => {
                props[name] = computedSelectors[index];
            }, {});
        }
    );

    const actions = reduce(deps, (dependency, actions, name) => {
        actions[`${name}.action`] = dependency.action;
    }, {});

    createConnector(selector, {})
};

connectRouteWithDeps({
    user: {
        action: fetchCurrentUser,
        selector: user
    }
});


export const ResolvingRoute = (props) => {
    const {
        resolve,
        component: Component
    } = props;

    return (
        <Route to={ props => <Component { ...props } { ...resolve }/> }/>
    );
};

ResolvingRoute.displayName = 'ResolvingRoute';
