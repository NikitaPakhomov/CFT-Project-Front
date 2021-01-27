import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { withAuth } from '../Auth/Auth';



export const PrivateRoute = withAuth(({ component: RouteComponent, isAuthorised: isAuthorized, ...rest }) => (
    <Route {...rest} render={routeProps => (
        isAuthorized ? <RouteComponent{...routeProps} /> : <Redirect to={"/login"} />
    )} />
));