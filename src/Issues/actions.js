'use strict';

import dispatcher from './../Dispatcher';
import axios from 'axios';

export function loadIssues(username, repo) {
    axios.get(`http://api.github.com/repos/${username}/${repo}/issues`)
        .then(function (result) {
            let issues = result.data;
            dispatcher.dispatch(loadIssues, issues);
        });
}