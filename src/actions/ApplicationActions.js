'use strict';

import dispatcher from './../Dispatcher';
import {getRouter} from './../client/RouterContainer';
import routes from './../stores/Routes';
import {requestGithubInfo} from './GithubInfoActions';

export function navigate(url) {
    dispatcher.dispatch(navigate, {
        url
    });
    if (url.indexOf('/board') === 0) {
        let pathParts = url.split('/');
        requestGithubInfo(pathParts[2], pathParts[3]);
    }
}
