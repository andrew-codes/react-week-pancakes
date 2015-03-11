'use strict';

import dispatcher from './../Dispatcher';
import {getRouter} from './../client/RouterContainer.js';
import routes from './routes';
import {getRoute} from './../lib/RouteUtils';
import {setGithubInfo} from './../GithubInfo/actions';

export function navigate(url) {
    dispatcher.dispatch(navigate, {
        url
    });
    if (url.indexOf('/board') === 0) {
        let pathParts = url.split('/');
        setGithubInfo(pathParts[2], pathParts[3]);
    }
}
