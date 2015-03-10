'use strict';

import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import App from './components/App';
import routes from './Application/routes';

let routeComponents = Object.keys(routes).map((key)=> {
    let route = routes[key];
    if (key === '/') {
        return <DefaultRoute name={route.name} handler={route.handler} key={key} />
    }
    if (key === 'not-found') {
        return <NotFoundRoute name={route.name} handler={route.handler} key={key} />
    }
    return <Route name={route.name} handler={route.handler} path={key} key={key} />
});
export default (
    <Route handler={App} name="app" path="/">
        {routeComponents}
    </Route>
);
