'use strict';

import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import App from './components/App';
import routes from './stores/Routes';

let routeComponents = Object.keys(routes).map((key)=> {
    let route = routes[key];
    if (key === '/') {
        return <DefaultRoute name={key} handler={route.handler} key={route.path} />
    }
    if (key === 'not-found') {
        return <NotFoundRoute name={key} handler={route.handler} key={route.path} />
    }
    return <Route name={key} handler={route.handler} path={route.path} key={route.path} />
});
export default (
    <Route handler={App} name="app" path="/">
        {routeComponents}
    </Route>
);
