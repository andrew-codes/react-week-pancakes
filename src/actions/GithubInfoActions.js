'use strict';

import dispatcher from './../Dispatcher';
import {getUser} from './../api/GithubApi';
import {requestGithubIssues} from './GithubIssueActions';

export function receivedGithubInfo() {
}

export function requestGithubInfo(username, repo) {
    dispatcher.dispatch(requestGithubInfo, {username});
    getUser()
        .then(function (result) {
            let userInfo = result.data;
            dispatcher.dispatch(receivedGithubInfo, {
                username: username,
                repo: repo,
                avatarUrl: userInfo.avatar_url,
                name: userInfo.name
            });
            return result;
        })
        .then(()=> {
            requestGithubIssues(username, repo);
        });
}