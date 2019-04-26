import React, { Fragment } from 'react';
import * as routes from './constants';
import { Route, Switch } from 'react-router-dom';
import { InitialPage, Error404 } from '/pages';
import { DefaultRoute } from './default-route';

export const AppRouter = () => (
    <Fragment>
        <Switch>
            /** Initial Page */
            <DefaultRoute path={ routes.INITIAL } exact component={ InitialPage } />
            <Route path={ '*' } component={ Error404 } />
        </Switch>
        {/*<RootModal/>*/}
    </Fragment>
);

/** Simple search pages */
{/*<DefaultRoute path={ routes.SIMPLE_SEARCH } component={ SimpleSearchRoutesGroup } />*/}

/** Advanced search */
{/*<DefaultRoute path={ routes.ADVANCED_SEARCH } component={ AdvancedSearchRoutesGroup } />*/}

/** Request details pages */
{/*<DefaultRoute path={ routes.REQUEST_DETAILS } component={ RequestDetailsRoutesGroup } />*/}

/** Request REPRINTS/ePRINTS details pages */
{/*<DefaultRoute path={ routes.REQUEST_REPRINTS_DETAILS } component={ RequestReprintsDetails }/>*/}

/** Checkout pages */
{/*<Auth*/}
    {/*path={ routes.CHECKOUT }*/}
    {/*isAuthenticated={ false }*/}
    {/*component={ () => <DefaultRoute component={ CheckoutRoutesGroup } /> }*/}
    {/*redirectComponent={ (props) => <AuthRedirect { ...props } /> }/>*/}

/** Registration page */
{/*<SuspendedRoute path={ routes.REGISTRATION } component={ RegistrationPageComponent } />*/}

{/*<Route path={ routes.TRX_PRODUCT_TERMS } component={ ProductTerms } />*/}

{/*<Route path={ routes.LICENSE_ITEM_DETAILS } component={ LicenseDetails } />*/}

{/*<DefaultRoute path={ routes.LICENSE } component={ InitialPageRedirect } />*/}