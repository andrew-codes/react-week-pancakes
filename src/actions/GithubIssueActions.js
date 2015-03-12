'use strict';

import dispatcher from './../Dispatcher';
import GithubCredentials from './../lib/GithubCredentials';
import {getIssues} from './../api/GithubApi';

export function requestGithubIssues(username, repo) {
    dispatcher.dispatch(requestGithubIssues, {username, repo});
    getIssues(username, repo)
        .then(function (results) {
            dispatcher.dispatch(receivedGithubIssues, results.data);
        },
        function (error) {
            dispatcher.dispatch(errorReceivingGithubIssues, {error});
        });
}

export function receivedGithubIssues() {
}

export function errorReceivingGithubIssues() {
}