'use strict';

import dispatcher from './../Dispatcher';
import axios from 'axios';
import {loadIssues} from './../Issues/actions';

export function setGithubInfo(username, repo) {
    axios.get(`http://api.github.com/users/${username}`)
        .then(function (result) {
            let userInfo = result.data;
            dispatcher.dispatch(setGithubInfo, {
                username: username,
                repo: repo,
                avatarUrl: userInfo.avatar_url,
                name: userInfo.name
            });
            return result;
        })
        .then(function (result) {
            loadIssues(username, repo);
            return result;
        });
}