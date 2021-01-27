import React from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../Auth/Auth';


export default withAuth(({ isAuthorized, authorize }) => (
    isAuthorized ? <Redirect to="/" /> :
        (<div>
            <h1>Time to login!!!</h1>
            <button onClick={authorize}>Login</button>
        </div>)
));

