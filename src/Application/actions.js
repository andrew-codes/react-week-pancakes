'use strict';

import dispatcher from './../Dispatcher';
import {getRouter} from './../client/RouterContainer.js';
import routes from './routes';

export function navigate(url) {
    let pathName = routes[url].name;
    getRouter().transitionTo(pathName);
    dispatcher.dispatch(navigate, {
        url
    });
}
